import mealImg from "../../assets/meals.jpeg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealImg} />
      </div>
    </div>
  );
};

export default Header;
