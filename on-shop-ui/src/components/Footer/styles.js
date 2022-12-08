import styled from "styled-components";
import { mobile, tablet } from "../../responsive";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
`;

export const Left = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;


export const Logo = styled.h1`
  text-transform: uppercase;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })};
  ${tablet({ backgroundColor: "#fff8f8" })};
`;

export const ContactItem = styled.section`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
`;

export const Payment = styled.img`
  width: 50%;
`;

export const Text = styled.p`
  max-width: 150px;
`;
