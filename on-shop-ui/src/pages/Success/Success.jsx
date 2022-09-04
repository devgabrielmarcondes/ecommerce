import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import VerifiedIcon from "@material-ui/icons/VerifiedUser";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { publicRequest } from "../../requestMethods";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { paidProduct } from "../../redux/cartRedux";

import {
  MainContainer,
  Container,
  Message,
  Icon,
  Header,
  Subheader,
  Receipt,
  Action,
  Button,
} from "./styles";

const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const data = location.state?.data;
  const cart = location.state?.cart;
  const user = useSelector((state) => state.user.currentUser);

  if (window.history.replaceState)
    window.history.replaceState(null, null, window.location.href);
  useEffect(() => {
    data === undefined && history.push("/");
    const shipping = cart.total > 4999 ? 0 : 250;
    const totalAmount = cart.total + shipping;
    async function createOrder() {
      try {
        await publicRequest.post("orders", {
          userId: user?._id || "Guest",
          amount: totalAmount,
          address: data.billing_details.address,
          name: data.billing_details.name,
          products: cart.products.map((product) => ({
            productId: product,
          })),
        });
        data && dispatch(paidProduct());
      } catch (error) {
        console.error(error);
      }
    }
    data && createOrder();
  }, [cart, data, user, history.push, dispatch]);
  return (
    <MainContainer>
      <Announcement />
      <Navbar />
      <Container>
        <Message>
          <Icon>
            <VerifiedIcon sx={{ fontSize: 56 }} />
          </Icon>
          <Header>Your payment was successful!</Header>
          <Subheader>
            Your order was confirmed. You will receive an automated transaction
            receipt shortly via email. Thank you for shopping
          </Subheader>
          <Receipt href={data?.receipt_url} target="_blank">
            View Receipt
            <ArrowRightAltIcon />
          </Receipt>
          <Action>
            <Button
              bg={"#f8f8f8"}
              color={"black"}
              onClick={() => {
                history.push("/orders");
              }}
            >
              View orders
            </Button>
            <Button
              bg={"black"}
              color={"white"}
              onClick={() => {
                history.push("/products/instock");
              }}
            >
              Shop more
            </Button>
          </Action>
        </Message>
      </Container>
    </MainContainer>
  );
};

export default Success;
