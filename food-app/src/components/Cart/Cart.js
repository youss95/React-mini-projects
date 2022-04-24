import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = ({ showCartHandler }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const removeHandler = (id) => {
    console.log("removeid", id);
    cartCtx.removeItem(id);
  };
  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheck(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-test-9dce8-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeHandler}
          onAdd={addHandler}
        />
      ))}
    </ul>
  );
  const modalAction = (
    <div className="actions">
      <button className="button--alt" onClick={showCartHandler}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <React.Fragment>
      {hasItems ? cartItems : <div>장바구니 비었음...</div>}
      <div className="total">
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      {isCheck && (
        <Checkout onConfirm={submitOrder} onClick={showCartHandler} />
      )}
      {!isCheck && modalAction}
    </React.Fragment>
  );

  const isSubmittingContent = <p>sending order data</p>;
  const didSubmitContent = <p>success!!</p>;
  return (
    <Modal showCartHandler={showCartHandler}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
