import { NavLink } from "react-router-dom";
import "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/quotes" className="active">
                All
              </NavLink>
              <NavLink to="/new-quote">new</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
