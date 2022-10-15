import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import FailedModal from "../../components/Modal/FailedModal/FailedModal";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  CheckBox,
  Button,
  Link,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", {
        token: currentUser.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(currentUser.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { username, password });
  };
  return (
    <Container>
      <FailedModal display={error === false ? "none" : "flex"} />
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Agreement htmlFor="log" style={{ marginTop: "10px" }}>
            <CheckBox type="checkbox" id="log" defaultChecked />
            Keep me logged in
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching ? true : false}>
            {isFetching ? (
              <CircularProgress
                style={{ color: "white", width: "24px", height: "24px" }}
              />
            ) : (
              "LOGIN"
            )}
          </Button>
          <Link>Don't remember your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
