import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;




export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

export const Agreement = styled.label`
  color: grey;
  width: "85%";
  font-size: 12px;
  text-align: left;
  padding-bottom: 10px;
  display: block;
  margin-left: 20px;
  text-indent: -20px;
  ${mobile({ marginLeft: "25px" })};
`;
export const CheckBox = styled.input`
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
  bottom: 1px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color:  #0A5C17;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    &:focus, &:hover, &:visited, &:link, &:active {
        color: inherit;
    }
`;

export const Error = styled.span`
  text-align: center;
  color: #d9534f;
  font-size: 14px;
  padding: 5px 0;
`;
