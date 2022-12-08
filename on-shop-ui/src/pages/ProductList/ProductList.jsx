import React, { useState } from "react";
import { useLocation } from "react-router";

import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Announcement/Announcement";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./styles";

const ProductList = () => {
  const location = useLocation();
  const simplify = (text) => {
    const regex = /[\s,\.;:\(\)\-'\+]/;
    return text.toUpperCase().split(regex);
  };
  const title = simplify(location.pathname.split("/")[2]);
  const titleText = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        <span>Você buscou por: </span>
        {titleText}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>Cor</Option>
            <Option>Branco</Option>
            <Option>Preto</Option>
            <Option>Vermelho</Option>
            <Option>Azul</Option>
            <Option>Amarelo</Option>
            <Option>Verde</Option>
            <Option>Cinza</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Tamanho</Option>
            <Option>PP</Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrar Produtos:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Mais recente</Option>
            <Option value="asc">Preço (asc)</Option>
            <Option value="desc">Preço(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products title={title} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
