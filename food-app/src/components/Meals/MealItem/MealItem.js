import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ id, name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
