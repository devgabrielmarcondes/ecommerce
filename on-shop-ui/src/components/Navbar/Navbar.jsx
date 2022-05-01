import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Form,
  Input,
  Logo,
  MenuItem,
} from "./styles";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { logout } from "../../redux/userRedux";
import { logoutCart } from "../../redux/cartRedux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState("");

  const handleClick = () => {
    dispatch(logout());
    dispatch(logoutCart());
    history.push("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/products/${query}`);
  };

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Form onSubmit={submitHandler}>
              <Input
                onChange={queryChangeHandler}
                placeholder="Search"
                name="query"
              />
              <Search
                style={{ color: "gray", fontSize: "16px" }}
                type="submit"
              />
            </Form>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>Zafyr.</Logo>
          </Link>
        </Center>
        <Right>
          {!currentUser ? (
            <Link to="register">
              <MenuItem>Register</MenuItem>
            </Link>
          ) : (
            ""
          )}
          {!currentUser ? (
            <Link to="login">
              <MenuItem>Sign In</MenuItem>
            </Link>
          ) : (
            <MenuItem onClick={handleClick}>Logout</MenuItem>
          )}
          <Link to="/cart">
            <MenuItem>
              {" "}
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
