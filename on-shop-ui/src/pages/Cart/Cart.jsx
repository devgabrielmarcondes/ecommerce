import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
  Remove,
  RemoveContainer,
  QuantityButton,
} from "./styles";
import ArrowCircleRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ArrowCircleLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useHistory } from "react-router-dom";
import {
  addProductQuantity,
  subtractProductQuantity,
  removeProduct,
} from "../../redux/cartRedux";

const KEY =
  "pk_test_51KUaqQBZjSXj8kjW9370h4AbrlGFs97lR3pPLmp9exOcgGaT8FvL2aqlJtUr394u6f5XmvXkkZgkVlxinRmnkBdc007oWK4FK3";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [remove, setRemove] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleQuantity = (type, product) => {
    const price = product.price;
    if (type === "Add" && product.quantity < 10) {
      dispatch(addProductQuantity({ product, price }));
    } else if (type === "Subtract" && product.quantity > 1) {
      dispatch(subtractProductQuantity({ product, price }));
    }
  };

  const handleRemove = (product) => {
    setRemove(true);
    const price = product.price;
    const quantity = product.quantity;
    dispatch(removeProduct({ product, price, quantity }));
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch (err) {
        // console.log(err);
      }
    };
    stripeToken && cart.total > 0 && makeRequest();
  }, [stripeToken, cart.total, history]);

  console.log(stripeToken);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whitelist</TopText>
          </TopTexts>
          <TopButton type="field">Checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} alt={product.desc} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <QuantityButton
                      color={product.quantity === 1 ? "lightgrey" : "#110f12"}
                    >
                      <ArrowCircleLeftRoundedIcon
                        onClick={() => handleQuantity("Subtract", product)}
                      />
                    </QuantityButton>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <QuantityButton
                      color={product.quantity === 1 ? "lightgrey" : "#110f12"}
                    >
                      <ArrowCircleRightRoundedIcon
                        onClick={() => handleQuantity("Add", product)}
                      />
                    </QuantityButton>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                  <RemoveContainer>
                    <Remove onClick={() => handleRemove(product)}>
                      Remove
                    </Remove>
                  </RemoveContainer>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://www.inbrasilexperiencias.com.br/catalogo-completo/wp-content/uploads/2020/12/Zara.jpg"
              billingAddress
              shippingAddress
              description={`Total price: ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
