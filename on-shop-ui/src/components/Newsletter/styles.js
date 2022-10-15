import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
  ${tablet({ textAlign: "center" })};
`;

export const InputContainer = styled.section`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%" })};
  ${tablet({ width: "80%" })};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
