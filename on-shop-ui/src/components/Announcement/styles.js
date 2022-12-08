import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  background-color: #0a5c17;
  color: white;
  font-size: 14px;
  font-weight: 500;
  filter: brightness(0.9);
  ${mobile({ display: "none" })};
`;
