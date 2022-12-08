import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { Link } from "react-router-dom"

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

export const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

export const SearchContainer = styled.section`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: auto;
  ${mobile({ width: "100%" })}
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "100%", marginLeft: "0" })};
  ${tablet({ width: "100%", marginLeft: "0" })};
`;

export const Center = styled.section`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: underline;
  ${mobile({ fontSize: "24px" })};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

export const Right = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, jusitfyContent: "center" })};
`;

export const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 25px;
  margin-top: 5px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
