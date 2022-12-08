import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Title = styled.h1`
  padding: 20px 20px 10px;
  ${mobile({ fontSize: "24px" })}
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Slider />
      <Title>CATEGORIAS</Title>
      <Categories />
      <Title>MAIS VENDIDOS</Title>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
