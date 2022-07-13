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
          <Header>Unable to register</Header>
        ) : (
          <Header>Unable to login</Header>
        )}
        {path === "register" ? (
          <Subheader>
            The username/email is already taken. Please try again.
          </Subheader>
        ) : (
          <Subheader>
            Your username/password is incorrect. Please try again.
          </Subheader>
        )}
        <Button onClick={closeModal}>Okay</Button>
      </Wrapper>
    </Container>
  );
};

export default FailedModal;
