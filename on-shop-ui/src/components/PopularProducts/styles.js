import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1290px;
  width: 90vw;
  ${mobile({ padding: "10px" })}
`;
export const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  ${mobile({ fontSize: "24px" })}
`;
