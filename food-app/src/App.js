import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      <Header showCartHandler={showCartHandler} />
      {cartIsShown && <Cart showCartHandler={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
