import { useDispatch } from "react-redux";
import { tryAgain } from "../../../redux/userRedux";
import { useLocation } from "react-router-dom";

import { Container, Wrapper, Header, Subheader, Button } from "./styles";

const FailedModal = ({ display }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(tryAgain());
  };
  return (
    <Container display={display}>
      <Wrapper>
        {path === "register" ? (
          <Header>Não foi possível efetuar o registro</Header>
        ) : (
          <Header>Não foi possível efetuar o login</Header>
        )}
        {path === "register" ? (
          <Subheader>
            O usuário/email já existe. Por favor, tente novamente.
          </Subheader>
        ) : (
          <Subheader>
            Usuário ou senha incorretas. Por favor, tente novamente.
          </Subheader>
        )}
        <Button onClick={closeModal}>Okay</Button>
      </Wrapper>
    </Container>
  );
};

export default FailedModal;
