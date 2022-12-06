import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userRedux";

import { Container, Wrapper, Header, Subheader, Button } from "./styles";

const FailedModal = ({ display }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(logout());
    window.location.reload(false);
  };
  return (
    <Container display={display}>
      <Wrapper>
        <Header>Unauthorized</Header>

        <Subheader>
          Sorry, you cannot access this portal. Please go back.
        </Subheader>

        <Button onClick={() => closeModal()}>Okay</Button>
      </Wrapper>
    </Container>
  );
};

export default FailedModal;
