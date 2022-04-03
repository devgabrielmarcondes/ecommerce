import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

import {
  NavbarContainer,
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";

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
    <NavbarContainer>
      <Announcement />
      <Navbar />
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
              LOGIN
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
    </NavbarContainer>
  );
};

export default Login;
