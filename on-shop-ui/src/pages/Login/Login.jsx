import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
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
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? (
              <CircularProgress
                style={{ color: "white", width: "24px", height: "24px" }}
              />
            ) : (
              "LOGIN"
            )}
          </Button>
          {error && (
            <Error disabled={currentUser !== null}>
              Something went wrong...
            </Error>
          )}
          <Link>Don't remember your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
