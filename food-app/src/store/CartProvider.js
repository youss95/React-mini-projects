import { useReducer, useRef } from "react";
import CartContext from "./cart-context";
//initial value
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//reducer function
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    const updatedItems = state.items.concat(action.item); //불변성
    const updatedTotal = state.totalAmount + action.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  //state 여기서 관리
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    console.log("i", item);
    dispatch({ type: "ADD_CART", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_CART", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      addItemToCart(item);
    },
    removeItem: (id) => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
