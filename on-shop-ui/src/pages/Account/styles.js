import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  position: relative;
`;
export const MainContainer = styled.div`
  margin: auto;
  max-width: 1295px;
  width: 90vw;
  padding: 55px 0;
`;

export const Wrapper = styled.div`
  width: 500px;
  margin: auto;
  ${mobile({ width: "90vw" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-width: 240px;
  ${mobile({ padding: "0" })}
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  align-items: center;
  max-width: 300px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  ${mobile({ padding: "0" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 0;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ padding: "0" })}
`;
export const Title = styled.h1`
  font-weight: 300;
  ${mobile({ fontSize: "24px" })}
`;

export const TextContainer = styled.div`
  justify-content: center;
  margin: auto;
  align-items: center;
  display: flex;
  ${mobile({ paddingTop: "20px" })}
`;
export const Text = styled.span`
  margin-left: 5px;
  text-align: center;
  ${mobile({ fontSize: "0.8rem" })};
`;
export const Action = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  color: grey;
  font-size: 0.9rem;
  &:hover {
    color: black;
  }
`;
export const Link = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  color: grey;
  font-size: 0.9rem;
  &:hover {
    color: black;
  }
`;

export const Navigation = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: lightgrey;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
  }
`;
export const Divider = styled.div`
  height: 25px;
  border: 1px solid lightgrey;
`;
export const Category = styled.div`
  flex: 1;
  display: flex;
  margin-right: 30px;
  align-items: center;
  justify-content: flex-end;
  color: grey;
  ${mobile({ flex: "0.75", marginRight: "15px" })}
`;
export const Value = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  ${mobile({ flex: "1" })}
`;
export const EditButton = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  cursor: pointer;
  transform: scale(0.9);
  &:hover {
    color: black;
  }
  ${mobile({ flex: "0.5" })}
`;
export const Header = styled.h2`
  text-align: center;
  margin: 10px auto;
  font-weight: 300;
  ${mobile({ fontSize: "24px" })}
`;
export const InfoContainer = styled.div`
  display: flex;
  padding: 15px 0;
  ${mobile({ padding: "10px 0" })};
`;
export const InfoText = styled.p`
  ${mobile({ fontSize: "0.8rem" })};
`;
