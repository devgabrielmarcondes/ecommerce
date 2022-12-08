import Product from "../Product/Product";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

import { Container, Title, Wrapper } from "./styles";

const PopularProducts = ({ path, description }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          path
            ? window.location.origin + `/api/products?path=${path}`
            : window.location.origin +  "/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [path]);
  return (
    <Container>
      <Title>{description}</Title>
      <Wrapper>
        {products.slice(0, 8).map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default PopularProducts;
