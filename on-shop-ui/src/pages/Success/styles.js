import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: #f8f8f8;
`;
export const Container = styled.div`
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 30px 0;
  max-width: 450px;
  width: 90vw;
  height: 400px;
  border: none;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.25);
  ${mobile({ width: "80vw" })}
`;

export const Message = styled.div`
  padding: 10px 40px;
  ${mobile({ padding: "10px 20px" })}
`;
export const Icon = styled.div`
  margin: 20px;
  color: #00c851;
  width: 60px;
  height: 60px;
  margin: auto;
`;
export const Header = styled.h1`
  margin: 20px 0;
  font-size: 24px;
  text-align: center;
  color: #00c851;
`;
export const Subheader = styled.p`
  margin: 20px 0;
  font-size: 15px;
  text-align: center;
  ${mobile({ fontSize: "14px" })}
`;
export const Receipt = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-decoration: none;
  color: grey;
  &:hover {
    color: black;
  }
  ${mobile({ fontSize: "12px" })}
`;
export const Action = styled.div`
  text-align: center;
  padding-top: 20px;
`;
export const Button = styled.button`
  width: 120px;
  padding: 12px 10px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 20px;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
  ${tablet({ width: "100px", fontSize: "11x", margin: "0 10px" })}
  ${mobile({ width: "100px", fontSize: "10x", margin: "0 10px" })}
`;
