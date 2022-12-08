import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color:  #D8D7DB;
  position: fixed;
  display: ${(prop) => prop.display};
  justify-content: center;
  align-items: center;
`;

const Header = styled.h3`
  font-size: 1.5rem;
  ${mobile({ fontSize: "1rem" })};
`;

const Processing = ({ display }) => {
  return (
    <Container display={display}>
      <Header>O pagamento está processando...</Header>
    </Container>
  );
};

export default Processing;
