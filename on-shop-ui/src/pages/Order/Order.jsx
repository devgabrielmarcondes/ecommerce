import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/modalRedux";
import { formatAmount } from "../../utility/formatAmount";
import { formatDate } from "../../utility/formatDate";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import UpdateOrderModal from "../../components/Modal/UpdateOrderModal/UpdateOrderModal";

import {
  Action,
  BoxColor,
  Button,
  Center,
  ColorOutline,
  Container,
  Details,
  Hr,
  Image,
  Info,
  Item,
  Left,
  OrderContainer,
  Product,
  ProductColor,
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Right,
  Subtitle,
  Summary,
  SummaryContainer,
  SummaryDiv,
  SummaryItem,
  SummaryItemLeft,
  SummaryItemRight,
  SummaryLeft,
  Text,
  TextContainer,
  Title,
  Wrapper,
} from "./styles";

const Order = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const orderID = location.pathname.split("/").at(-1);
  const orders = useSelector((state) => state.order.orders);
  const item = orders.find((item) => item._id === orderID);
  const products = item.products;
  const status = item.status;
  const totalAmount = item.amount;
  const handleModal = (type) => dispatch(openModal(type));
  return (
    <Container>
      <UpdateOrderModal />
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Pedido #{item._id.substring(0, 8)}</Title>
        <TextContainer>
          <Left>
            <Action
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
              <Text style={{ marginLeft: "5px" }}>Voltar</Text>
            </Action>
          </Left>
          <Right style={{ padding: "0" }}>
            {status === "To Ship" ? (
              <Action>
                <Button
                  color={"black"}
                  bg={"#f8f8f8"}
                  onClick={() => handleModal("Cancel")}
                >
                  Cancelar Pedido
                </Button>
              </Action>
            ) : status === "Entregado" ? (
              <Action>
                <Button
                  color={"white"}
                  bg={"#110f12"}
                  onClick={() => handleModal("Receive")}
                >
                  Pedido Recebido
                </Button>
              </Action>
            ) : null}
          </Right>
        </TextContainer>
        <OrderContainer>
          <ProductContainer>
            <Subtitle>Camisetas pedidas</Subtitle>
            <TextContainer>
              <Left>
                <Text>Produto</Text>
              </Left>
              <Center>
                <Text>Quantidade</Text>
              </Center>
              <Right>
                <Text>Status</Text>
              </Right>
            </TextContainer>
            <Hr height={"3px"} />
            {products?.map((i) => (
              <Item
                key={i.productId._id + i.productId.size + i.productId.color}
              >
                <Info>
                  <Product>
                    <Left>
                      <Details>
                        <ProductImage
                          onClick={() => {
                            history.push(`/product/${i.productId._id}`);
                          }}
                        >
                          <Image src={i.productId.img} />
                        </ProductImage>
                        <ProductDetails>
                          <ProductName>{i.productId.name}</ProductName>
                          <ProductInfo> {i.productId.size} US</ProductInfo>
                          <ProductColor>
                            <ColorOutline>
                              <BoxColor color={i.productId.color} />
                            </ColorOutline>
                          </ProductColor>
                          <ProductInfo>Qty: {i.productId.quantity}</ProductInfo>
                        </ProductDetails>
                      </Details>
                    </Left>
                    <Center>
                      <ProductPrice>
                        {formatAmount(i.productId.quantity * i.productId.price)}
                      </ProductPrice>
                    </Center>
                    <Right>
                      <ProductPrice>{status}</ProductPrice>
                    </Right>
                  </Product>
                </Info>
              </Item>
            ))}
          </ProductContainer>
          <SummaryContainer>
            <Summary>
              <SummaryLeft>
                <SummaryDiv>
                  <Subtitle>Billing Summary</Subtitle>
                  <SummaryItem>
                    <SummaryItemLeft>{item.name}</SummaryItemLeft>
                    <SummaryItemRight>
                      {formatDate(item.createdAt)}
                    </SummaryItemRight>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemLeft>{item.address.line1},</SummaryItemLeft>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemLeft>
                      {item.address.city}, {item.address.postal_code}
                    </SummaryItemLeft>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemLeft>{item.address.country}</SummaryItemLeft>
                  </SummaryItem>
                </SummaryDiv>
                <SummaryDiv left={"left"}>
                  <Subtitle>Order Summary</Subtitle>
                  <SummaryItem>
                    <SummaryItemLeft>Subtotal</SummaryItemLeft>
                    <SummaryItemRight>
                      {totalAmount < 5249
                        ? formatAmount(totalAmount - 250)
                        : formatAmount(totalAmount)}
                    </SummaryItemRight>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemLeft>Shipping</SummaryItemLeft>
                    <SummaryItemRight>
                      {totalAmount > 4999 ? "free" : formatAmount(250)}
                    </SummaryItemRight>
                  </SummaryItem>
                  <Hr height={"2px"} />
                  <SummaryItem>
                    <SummaryItemLeft>Total</SummaryItemLeft>
                    <SummaryItemRight>
                      {formatAmount(totalAmount)}
                    </SummaryItemRight>
                  </SummaryItem>
                </SummaryDiv>
              </SummaryLeft>
            </Summary>
          </SummaryContainer>
        </OrderContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Order;
