import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${tablet({ justifyContent: "space-around" })};
  ${mobile({ justifyContent: "space-around" })};
`;

