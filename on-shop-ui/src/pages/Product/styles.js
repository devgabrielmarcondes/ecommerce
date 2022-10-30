import styled from "styled-components";
import { mobile, tablet, bigtablet } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}
`;

export const ImgContainer = styled.section`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  ${mobile({ objectFit: "cover", height: "40vh" })}
  ${tablet({ objectFit: "contain", height: "70vh" })}
  ${bigtablet({ objectFit: "fill" })}
`;

export const InfoContainer = styled.section`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
  margin-top: 40px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

export const Desc = styled.p`
  font-weight: 500;
  margin: 20px 0px;
  font-size: 16px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

export const FilterContainer = styled.section`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: none;

  &:focus {
    border-radius: 50%;
    border: 2px solid black;
  }
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

export const AmountContainer = styled.section`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;
