const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const commentRoute = require("./routes/comments");
const wishlistRoute = require("./routes/wishlist");
const cors = require("cors");
const app = express();
const path = require('path')

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/comments", commentRoute);
app.use("/api/wishlist", wishlistRoute);
app.use(express.static(path.join(__dirname + "/build")))
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running on port 5000");
});

