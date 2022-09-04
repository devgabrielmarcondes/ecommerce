import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { UserModal } from "../../components/Modal/UserModal/UserModal";

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
import { Search } from "@material-ui/icons";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import { Badge } from "@material-ui/core";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  const [query, setQuery] = useState("");

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
          <Logo
            onClick={() => {
              history.push("/");
            }}
          >
            Zafyr.
          </Logo>
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
            ""
          )}
          {currentUser ? (
            <MenuItem>
              <UserModal />
            </MenuItem>
          ) : (
            ""
          )}

          <MenuItem>
            {" "}
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon
                onClick={() => {
                  history.push("/cart");
                }}
              />
            </Badge>
          </MenuItem>
          <MenuItem>
            {" "}
            <Badge badgeContent={quantity} color="primary">
              <FavoriteBorderOutlinedIcon
                onClick={() => {
                  history.push("/wishlist");
                }}
              />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
