import { useContext } from "react";
import { DispatchContext } from "../App";
import "../style/Product.css";

function Product({ id, title, image, price, rating }) {
  const { onAdd } = useContext(DispatchContext);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={() => onAdd(title, price, rating, image)}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
