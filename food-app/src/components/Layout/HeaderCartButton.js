import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnHigh, setBtnHigh] = useState(false);
  const cartItemsNum = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHigh(true);
    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);
    //cleanup
    return () => {
      console.log("off");
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button
      className={["button", `${btnHigh ? "bump" : ""}`].join(" ")}
      onClick={showCartHandler}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemsNum}</span>
    </button>
  );
};

export default HeaderCartButton;
