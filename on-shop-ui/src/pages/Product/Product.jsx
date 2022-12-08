import ArrowCircleRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ArrowCircleLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useLocation } from "react-router";
import { publicRequest } from "../../requestMethods";

import PopularProducts from "../../components/PopularProducts/PopularProducts";
// import Comments from "../../components/Comments/Comments";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styles";
import { addProduct } from "../../redux/cartRedux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.alt} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>R$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Cor</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Tamanho</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <ArrowCircleLeftRoundedIcon
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <ArrowCircleRightRoundedIcon
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>Adicionar ao Carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Comments productId={product._id} /> */}
      <PopularProducts description="CONFIRA TAMBÉM" />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
