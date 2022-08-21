import Navbar from "../../components/Navbar/Navbar";
import Promotion from "../../components/Announcement/Announcement";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import {
  Action,
  Container,
  Left,
  Text,
  TextContainer,
  Title,
  WishContainer,
  WishWrapper,
  Wrapper,
} from "./styles";

const Wishlist = () => {
  const history = useHistory();
  const wishlist = useSelector((state) => state.wish.wishlist);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get(`products`);
        setProducts(
          response.data.filter((item) => wishlist.includes(item._id))
        );
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [wishlist]);
  return (
    <Container>
      <Promotion />
      <Navbar />
      <Wrapper>
        <Title>My Wishlist</Title>
        <TextContainer>
          <Left>
            <Action
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
              <Text>Back</Text>
            </Action>
          </Left>
        </TextContainer>
        <WishContainer>
          <WishWrapper>
            {products?.length === 0 && (
              <TextContainer style={{ margin: "50px auto" }}>
                <Text>You do not have any wishlist</Text>
              </TextContainer>
            )}
            {products?.map((item) => (
              <Product item={item} key={item._id} />
            ))}
          </WishWrapper>
        </WishContainer>
      </Wrapper>
      <PopularProducts description="PEOPLE ALSO VIEW THESE" />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Wishlist;
