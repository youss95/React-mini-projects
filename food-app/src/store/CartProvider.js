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
    console.log("a", state);
    const updatedTotal =
      state.totalAmount + action.item.price * action.item.amount;
    //장바구니 아이템 조사해서 겹치는 아이템 찾기
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];

    let updatedItems;
    if (existingCartItem) {
      //추가아이템 : 기존아이템에 갯수 올려서 새로운 객체로
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      console.log("updated", updatedItems);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      //first

      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }
  if (action.type === "REMOVE_CART") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[index];
    const updatedTotal = state.totalAmount - existingItem.price;
    let newItems;
    if (existingItem.amount === 1) {
      newItems = state.items.filter((x) => x.id !== existingItem.id);
    } else {
      const newItem = { ...existingItem, amount: existingItem.amount - 1 };
      newItems = [...state.items];
      newItems[index] = newItem;
    }
    return {
      items: newItems,
      totalAmount: updatedTotal,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
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
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      addItemToCart(item);
    },
    removeItem: (id) => {
      removeItemFromCart(id);
    },
    clearCart: () => {
      clearCart();
    },
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
