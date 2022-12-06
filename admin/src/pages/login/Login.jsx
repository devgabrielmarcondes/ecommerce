import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import FailedModal from "../../components/Modal/FailedModal/FailedModal";
import NotAdmin from "../../components/Modal/NotAdmin/NotAdmin";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  Container,
  MainContainer,
  Title,
  Wrapper,
  Form,
  InputField,
  Button,
} from "./styles";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { username, password });
  };

  return (
    <Container>
      <NotAdmin display={currentUser?.isAdmin === false ? "flex" : "none"} />
      <FailedModal display={error === false ? "none" : "flex"} />
      <MainContainer>
        <Title>ZAFYR ADMIN DASHBOARD</Title>
        <Wrapper>
          <Form>
            <InputField
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <InputField
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button onClick={handleClick} disabled={isFetching ? true : false}>
              {isFetching ? (
                <CircularProgress
                  style={{ color: "white", width: "24px", height: "24px" }}
                />
              ) : (
                "LOGIN"
              )}
            </Button>
          </Form>
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default Login;
