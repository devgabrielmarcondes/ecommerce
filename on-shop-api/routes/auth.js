const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
    { expiresIn: "10m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
    { expiresIn: "7d" }
  );
};

router.post("/token", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken)
    return res
      .status(401)
      .json("You are not authenticated! Missing refresh token!");
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json("Refresh token is invalid!");

  jwt.verify(refreshToken, process.env.JWT_SEC, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);

    const { password, ...others } = user._doc;

    if (OriginalPassword !== req.body.password || !user) {
      res.status(401).json("Wrong credentials!");
    } else {
      res.status(200).json({ ...others, accessToken, refreshToken });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
});

module.exports = router;
