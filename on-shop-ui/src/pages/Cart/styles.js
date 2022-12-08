import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

export const Top = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "none"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.section`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.section`
  flex: 3;
`;

export const Product = styled.section`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.section`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductAmountContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.span`
  width: 40px;
  height: 30px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    fontSize: "8px",
    width: "30px",
    height: "25px",
    borderRadius: "8px",
    marginLeft: "3px",
  })}
`;

export const RemoveContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 5px;
`;

export const Remove = styled.p`
  color: grey;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  background-color: white;
  color: ${(prop) => prop.color};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(1.2);
  ${mobile({
    transform: "scale(0.75)",
    margin: "0",
    width: "20px",
  })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.section`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
`;

export const SummaryItem = styled.section`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
  }
`;
