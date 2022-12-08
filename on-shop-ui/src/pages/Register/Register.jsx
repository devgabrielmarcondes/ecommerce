import React, { useState, useEffect } from "react";
import { register, login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import FailedModal from "../../components/Modal/FailedModal/FailedModal";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  CheckBox,
  Link,
  Button,
  Error,
} from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [admin, setAdmin] = useState(true);

  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const checkPassword = () => {
    if (password !== confirmPassword) {
      return false;
    } else if (password.length < 8) {
      return false;
    }
    return true;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    checkPassword() &&
      (await register(dispatch, {
        name,
        surname,
        username,
        email,
        password,
        isAdmin: admin,
      }));
    await login(dispatch, { username, password });
  };

  useEffect(() => currentUser && <Redirect to="/" />, [currentUser]);

  return (
    <Container>
      <FailedModal display={error === false ? "none" : "flex"} />;
      <Wrapper>
        <Title>Criar uma conta</Title>
        <Form>
          <Input
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
          />
          <Input
            placeholder="Sobrenome"
            onChange={(e) => setSurname(e.target.value)}
            required
            minLength={2}
          />
          <Input
            placeholder="Nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={5}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength={5}
          />
          <Input
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
          />
          <Input
            placeholder="Confirmar senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
          />
          {password !== "" &&
          confirmPassword !== "" &&
          password !== confirmPassword ? (
            <Error>Password do not match</Error>
          ) : password !== "" && password.length < 8 ? (
            <Error>Password must be at least 8 characters</Error>
          ) : username !== "" && username.length < 5 ? (
            <Error>Username must be at least 5 characters</Error>
          ) : null}
          <Agreement htmlFor="false" style={{ marginTop: "10px" }}>
            <CheckBox
              type="checkbox"
              name="isAdmin"
              value={admin}
              onChange={(prev) => setAdmin((prev) => !prev)}
              id="false"
              required
            />
            Eu li e concordo com a <Link>Política de Privacidade</Link> e os{" "} 
            <Link>Termos de Serviço</Link> da Zafyr.
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching ? true : false}>
            {isFetching ? (
              <CircularProgress
                style={{ color: "white", width: "24px", height: "24px" }}
              />
            ) : (
              "REGISTRAR"
            )}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
