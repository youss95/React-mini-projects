import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = ({ showCartHandler }) => {
  return (
    <button className="button" onClick={showCartHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
