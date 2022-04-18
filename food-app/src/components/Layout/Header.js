import mealImg from "../../assets/meals.jpeg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ showCartHandler }) => {
  return (
    <div>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton showCartHandler={showCartHandler} />
      </header>
      <div className="main-image">
        <img src={mealImg} />
      </div>
    </div>
  );
};

export default Header;
