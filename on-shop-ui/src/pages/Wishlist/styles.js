import { mobile } from "../../responsive";

import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  margin: auto;
  max-width: 1295px;
  width: 90vw;
  padding: 55px 0;
  ${mobile({ padding: "10 0px" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-width: 240px;
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
  padding-top: 20px;
  ${mobile({ padding: "10px 0" })}
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
export const WishContainer = styled.div`
  margin: auto;
  max-width: 1290px;
  width: 90vw;
`;
export const WishWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: "0 10px" })}
`;
