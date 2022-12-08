import React, { useState } from "react";
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
  StyledLink,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { username, password });
  };
  return (
    <Container>
      <FailedModal display={error === false ? "none" : "flex"} />
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="Nome de Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Agreement htmlFor="log" style={{ marginTop: "10px" }}>
            <CheckBox type="checkbox" id="log" defaultChecked />
            Mantenha-me conectado
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
          <StyledLink>Não lembra sua senha?</StyledLink>
          <StyledLink to={`/register`}>Criar uma nova conta</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
