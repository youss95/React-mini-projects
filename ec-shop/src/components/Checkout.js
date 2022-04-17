import { useContext } from "react";
import { StateContext } from "../App";
import "../style/Checkout.css";

function Checkout() {
  const { basket } = useContext(StateContext);
  console.log("b", basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title"></h2>
        </div>
      </div>
      <div>
        {basket.map((x) => (
          <div>{x.title}</div>
        ))}
      </div>
      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
