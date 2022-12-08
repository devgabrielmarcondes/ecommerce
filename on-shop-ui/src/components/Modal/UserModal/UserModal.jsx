import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import ShoppingBagOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { logout } from "../../../redux/userRedux";
import { logoutCart } from "../../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

const Icon = styled.div``;

export const UserMobileModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleSignOut = () => {
    dispatch(logout() && logoutCart());
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const initials = () => {
    const fullName = user.name + " " + user.surname;
    const firstLetters = fullName.match(/\b\w/g).join("");
    return firstLetters.toUpperCase();
  };
  return (
    <React.Fragment>
      <Icon>
        <Avatar
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: " #18171C",
            bgcolor: "white",
            width: 28,
            height: 28,
            fontSize: "12px",
          }}
        >
          {initials()}
        </Avatar>
      </Icon>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 24,
              height: 24,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/account");
          }}
        >
          <ListItemIcon>
            <PersonOutlinedIcon />
          </ListItemIcon>
          Conta
        </MenuItem>
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/cart");
          }}
        >
          <ListItemIcon>
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
          Carrinho
        </MenuItem>
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/orders");
          }}
        >
          <ListItemIcon>
            <PlaylistAddCheckOutlinedIcon />
          </ListItemIcon>
          Pedidos
        </MenuItem>
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/wishlist");
          }}
        >
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>
          Lista de Desejos
        </MenuItem>
        <Divider />
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => handleSignOut()}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export const UserModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const initials = () => {
    const fullName = user.name + " " + user.surname;
    const firstLetters = fullName.match(/\b\w/g).join("");
    return firstLetters.toUpperCase();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = async () => {
    try {
      await axios.post(window.location.origin + "/api/auth/logout", {
        token: user.refreshToken,
      });
      dispatch(logout());
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Icon>
        <Avatar
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: "#110f12",
            bgcolor: "white",
            width: 38,
            height: 38,
            fontSize: "14px",
          }}
        >
          {initials()}
        </Avatar>
      </Icon>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2,
            "& .MuiAvatar-root": {
              width: 24,
              height: 24,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/account");
          }}
        >
          <ListItemIcon>
            <PersonOutlinedIcon />
          </ListItemIcon>
          Conta
        </MenuItem>
        <MenuItem
          style={{ transform: "scale(0.9)" }}
          onClick={() => {
            history.push("/orders");
          }}
        >
          <ListItemIcon>
            <PlaylistAddCheckOutlinedIcon />
          </ListItemIcon>
          Pedidos
        </MenuItem>

        <Divider />
        <MenuItem
          onClick={() => handleSignOut()}
          style={{ transform: "scale(0.9)" }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
