import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <div>
      <Header showCartHandler={showCartHandler} />
      {cartIsShown && <Cart showCartHandler={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
