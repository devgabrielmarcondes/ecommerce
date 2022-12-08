import styled from "styled-components";
import { mobile } from "../../../responsive";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  max-height: 400px;
  position: relative;
  background-color: white;
  margin: auto;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  padding: 50px 30px;
  ${mobile({ width: "80%" })};
`;

export const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5%;
  right: 5%;
  color: black;
`;

export const Header = styled.h2`
  text-align: center;
  margin: 10px auto;
  font-weight: 300;
  ${mobile({ fontSize: "24px" })}
`;

export const Form = styled.form`
  margin: auto;
  text-align: center;
`;

export const Message = styled.p`
  margin: 30px auto;
  width: 90%;
  text-align: center;
`;

export const Agreement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin: 0 10px;
  color: #555;
  cursor: pointer;
`;

export const Radio = styled.input`
  width: 15px;
  height: 15px;
  padding: 0;
  margin-right: 10px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border-radius: 20px;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #110f12;
  color: white;
  &:disabled {
    background-color: #f8f8f8;
    color: black;
    cursor: not-allowed;
  }
`;
