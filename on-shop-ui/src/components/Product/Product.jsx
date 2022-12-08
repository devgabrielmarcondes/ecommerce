import React, { useState } from "react";
import Notification from "../Modal/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { updateWishlistProducts } from "../../redux/apiCalls";

import { FavoriteBorderOutlined } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {
  Container,
  Image,
  Info,
  Icon,
  InfoText,
  Left,
  Name,
  Right,
} from "./styles";

const Product = ({ item }) => {
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const currentWishlist = useSelector((state) => state.wish.wishlist);
  const wishlistId = useSelector((state) => state.wish.wishlistId);

  const isLike = currentWishlist?.includes(item._id);

  const handleAdd = () => {
    setAdd(true);
    const updatedWishlist = [...currentWishlist, item._id];
    const newWishlist = { wishlist: updatedWishlist };
    updateWishlistProducts(wishlistId, newWishlist, dispatch);
  };
  const handleRemove = () => {
    setRemove(true);
    const productIndex = currentWishlist.indexOf(item._id);
    const updatedWishlist = [
      ...currentWishlist.slice(0, productIndex),
      ...currentWishlist.slice(productIndex + 1),
    ];
    const newWishlist = { wishlist: updatedWishlist };
    updateWishlistProducts(wishlistId, newWishlist, dispatch);
  };

  return (
    <Container>
      <Notification open={add} setOpen={setAdd} type="add" />
      <Notification open={remove} setOpen={setRemove} type="remove" />
      <Image
        src={item.img}
        onClick={() => {
          history.push(`/product/${item._id}`);
        }}
      />

      <Info>
        <Left>
          <Name>{item.title}</Name>
          <InfoText>R$ {item.price}</InfoText>
        </Left>
        <Right>
          {user && (
            <Icon>
              {isLike ? (
                <FavoriteIcon onClick={handleRemove} />
              ) : (
                <FavoriteBorderOutlined onClick={handleAdd} />
              )}
            </Icon>
          )}
        </Right>
      </Info>
    </Container>
  );
};

export default Product;
