import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div``;
export const MainContainer = styled.div`
  margin: auto;
  max-width: 1295px;
  width: 90vw;
  padding: 55px 0;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 900px;
  width: 90vw;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-width: 240px;
  ${tablet({ flex: "1" })}
  ${mobile({ padding: "0", flexWrap: "wrap", minWidth: "120px" })}
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
  ${tablet({ flex: "0.75" })}
  ${mobile({ flex: "1", padding: "0" })}
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
