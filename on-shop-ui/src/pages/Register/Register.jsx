import React, { useState } from "react";
import { register, login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  Error,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    await register(dispatch, { name, surname, username, email, password });
    await login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setSurname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? (
              <CircularProgress
                style={{ color: "white", width: "24px", height: "24px" }}
              />
            ) : (
              "CREATE"
            )}
          </Button>
          {error && (
            <Error disabled={currentUser !== null}>
              Something went wrong...
            </Error>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
