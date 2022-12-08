import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Success from "./pages/Success/Success";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import Order from "./pages/Order/Order";
import Account from "./pages/Account/Account";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { quantity } = useSelector((state) => state.cart);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/success">
          {!user || quantity !== 0 ? <Redirect to="login" /> : <Success />}
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/account">
          {!user ? <Redirect to="login" /> : <Account />}
        </Route>
        <Route path="/orders">
          {!user ? <Redirect to="login" /> : <OrderHistory />}
        </Route>
        <Route path="/order/:id">
          {!user ? <Redirect to="/login" /> : <Order />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
