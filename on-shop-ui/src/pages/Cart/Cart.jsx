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
  const currentUser = useSelector((state) => state.user);
  const [stripeToken, setStripeToken] = useState(null);
  const [remove, setRemove] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const frete = 5.99;

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
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Seu carrinho</Title>
        {/* <Top> 
          <TopButton>Continue comprando</TopButton>
          <TopTexts>
            <TopText>Carrinho</TopText>
            <TopText>Sua lista de desejos</TopText>
          </TopTexts>
          <TopButton type="field">Continue comprando</TopButton>
        </Top>
        */}
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} alt={product.desc} />
                  <Details>
                    <ProductName>
                      <b>Produto:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Tamanho:</b> {product.size}
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
                    R$ {(product.price * product.quantity).toFixed(2)}
                  </ProductPrice>
                  <RemoveContainer>
                    <Remove onClick={() => handleRemove(product)}>
                      Remover
                    </Remove>
                  </RemoveContainer>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Resumo do Pedido</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frete Estimado</SummaryItemText>
              <SummaryItemPrice>
                R$ {cart.total.toFixed(2) > 50 ? "0.00" : `${frete.toFixed(2)}`}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto do Frete</SummaryItemText>
              <SummaryItemPrice>
                R${" "}
                {cart.total.toFixed(2) > 50 ? `-${frete.toFixed(2)}` : "0.00"}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                R${" "}
                {cart.total.toFixed(2) > 50
                  ? cart.total.toFixed(2)
                  : Number(cart.total.toFixed(2)) + Number(frete.toFixed(2))}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Zafyr"
              image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fstack-of-cash-transparent%2Fstack-of-cash-transparent-13.jpg&f=1&nofb=1&ipt=258339b8aac2c2fa7ae9c9d7a0060965a86c6ba033d2dafc2562694cd007fba7&ipo=images"
              billingAddress
              shippingAddress
              description={`Preço total: R${Number(cart.total.toFixed(2))}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button
                disabled={
                  currentUser === null || cart.quantity === 0 ? true : false
                }
              >
                IR PARA O CHECKOUT
              </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
