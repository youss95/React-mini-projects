import { useContext } from "react";
import { StateContext } from "../App";
import Header from "../components/Header";
import Product from "../components/Product";
import "../style/Home.css";

function Home() {
  const { dummy } = useContext(StateContext); //prop
  console.log(dummy);
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            {dummy.map((pr) => (
              <Product key={parseInt(pr.id)} {...pr} />
            ))}
          </div>
          <div className="home__row"></div>

          <div className="home__row"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
