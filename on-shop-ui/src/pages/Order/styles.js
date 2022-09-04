import styled from "styled-components";
import { mobile, tablet, bigtablet } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1295px;
  width: 90vw;
  padding: 55px 0;
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding: 10px 0;
  min-width: 240px;
  ${tablet({ flex: "3" })}
  ${mobile({ padding: "0", flexWrap: "wrap", minWidth: "120px" })}
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px 0;
  ${tablet({ flex: "0.75" })}
  ${mobile({ flex: "1", padding: "0" })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 0;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ flex: "0.75" })}
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
`;
export const Text = styled.span`
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
  ${mobile({ paddingTop: "20px" })}
`;
export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column", paddingTop: "20px" })}
`;

export const ProductContainer = styled.div`
  flex: 2.5;
  ${bigtablet({ flex: "2" })}
  ${tablet({ flex: "2" })}
`;

export const Item = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${mobile({ paddingTop: "10px" })};
`;
export const Info = styled.div`
  flex: 1;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0" })}
`;
export const Details = styled.div`
  margin: auto;
  display: flex;
  flex: 1;
`;
export const ProductDetails = styled.div`
  min-width: 240px;
  padding: 0 10px;
  flex: 1;
  ${mobile({ minWidth: "120px" })}
`;
export const ProductImage = styled.div`
  width: 140px;
  height: 110px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  background-color: #efefef;
  margin: auto;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  ${bigtablet({ width: "100px", flex: "1" })}
  ${mobile({ width: "70px", height: "100px" })}
`;

export const Image = styled.img`
  width: 80%;
  margin: auto;
`;
export const ProductName = styled.h3`
  font-size: 1rem;
  ${mobile({ fontSize: "0.85rem" })}
`;
export const ProductInfo = styled.p`
  font-size: 0.85rem;
  margin: 2px 0;
  color: gray;
  ${mobile({ fontSize: "0.8rem" })}
`;

export const ProductColor = styled.div`
  flex: 1;
`;
export const ColorOutline = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  ${mobile({
    width: "15px",
    height: "15px",
  })}
`;
export const BoxColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({
    width: "13px",
    height: "13px",
  })}
`;

export const ProductPrice = styled.p`
  align-items: center;
  justify-content: center;
  font-weight: 200;
  flex: 1;
  font-size: 1rem;
  ${mobile({ fontSize: "0.9rem" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  margin-top: 5px;
  border: none;
  height: ${(props) => props.height};
  ${mobile({ margin: "10px 0" })}
`;
export const SummaryContainer = styled.div`
  flex: 1;
  padding-left: 40px;
  ${tablet({ padding: "0" })}
  ${mobile({ padding: "0" })}
`;
export const Summary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const SummaryLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${tablet({ marginTop: "20px", flexDirection: "row" })}
  ${mobile({ marginTop: "20px" })}
`;

export const SummaryDiv = styled.div`
  flex: 1;
  ${tablet({ marginLeft: (props) => props.left === "left" && "40px" })}
`;
export const Subtitle = styled.h2`
  font-weight: 200;
  padding: 10px 0;
  font-size: 20px;
  ${mobile({ fontSize: "18px", padding: "5px 0" })}
`;

export const SummaryItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  ${tablet({ marginTop: "15px 0" })}
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  text-align: center;
  font-size: 0.8rem;
  width: 120px;
  background-color: ${(prop) => prop.bg};
  color: ${(prop) => prop.color};
  cursor: pointer;
  padding: 10px;
  ${mobile({ padding: "8px" })};
`;
export const SummaryItemLeft = styled.span`
  ${mobile({ fontSize: "14px" })}
`;

export const SummaryItemRight = styled.span`
  ${mobile({ fontSize: "14px" })}
`;
