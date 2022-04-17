import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../App";
const Header = () => {
  const navigate = useNavigate();
  const { basket } = useContext(StateContext);
  return (
    <div className="header">
      <div className="header__logo" onClick={() => navigate("/")}>
        <LocalGroceryStoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header_logoTitle">SHOP</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guset</span>
          <span className="nav__itemLineTwo">Sign in</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__itemBasket">
          <ShoppingBasketIcon
            fontSize="large"
            onClick={() => navigate("/checkout")}
          />
          <span className="nav__itemLineTwo nav__basketCount">
            {basket.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
