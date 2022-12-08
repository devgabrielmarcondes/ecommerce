import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 18px;
  padding: 20px;

  > span {
    color: grey;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${tablet({ flexDirection: "column" })};
  ${mobile({ flexDirection: "column" })};
`;

export const Filter = styled.div`
  margin-bottom: 20px;
  ${tablet({ flexDirection: "column" })};
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })};
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Select = styled.select`
  padding: 10px;
  margin-left: 10px;
  ${mobile({ margin: "10px 0px" })};
`;

export const Option = styled.option``;
