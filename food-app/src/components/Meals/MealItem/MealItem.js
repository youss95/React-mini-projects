import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const fixedPrice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    console.log("ss");
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
