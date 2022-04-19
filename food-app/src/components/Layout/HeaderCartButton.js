import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((cur, item) => {
    return cur + item.length;
  }, 0);
  console.log(cartCtx);
  return (
    <button className="button" onClick={showCartHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemsNum}</span>
    </button>
  );
};

export default HeaderCartButton;
