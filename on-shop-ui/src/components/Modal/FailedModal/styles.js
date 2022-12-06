import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: ${(prop) => prop.display};
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 250px;
  position: relative;
  background-color: white;
  margin: auto;
  text-align: center;
  border-radius: 20px;
  max-width: 350px;
  overflow: hidden;
  padding: 20px;
  ${mobile({ width: "80%" })};
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  margin: 15px 0px;
`;

export const Subheader = styled.h3`
  font-size: 1rem;
  margin: 30px 0px;
`;

export const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  background-color: #110f12;
  color: white;
`;
