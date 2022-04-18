import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = ({ showCartHandler }) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.0 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal showCartHandler={showCartHandler}>
      {cartItems}
      <div className="total">
        <span>Total</span>
        <span>3</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={showCartHandler}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
