import "./CartItem.css";

const CartItem = ({ name, amount, price, onRemove, onAdd }) => {
  const itemPrice = `$${price.toFixed(2)}`;

  return (
    <li className="cart-items">
      <div>
        <h2>{name}</h2>
      </div>
      <div className="summarys">
        <span className="prices">{itemPrice}</span>
        <span className="amounts">x {amount}</span>
      </div>

      <div className="actionss">
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
