import React, { useContext, useReducer } from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeContext from "./utils/Theme";
import "../styles/navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    if (theme === "light") {
      return setTheme({ type: "dark", payload: "dark" });
    } else {
      return setTheme({ type: "light", payload: "light" });
    }
  }

  return (
    <nav  className={theme === "dark" ? "dark" : "light"} id = "nav-flex">
      <div  className="nav ">
        <div className="title">
          <span id="one">D</span>
          <span id="two">H </span>
          <span id="three">Odonto</span>
        </div>
        <div className="button-nav">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/favs">
                Favs
              </Link>
            </li>
          </ul>
              <button className="button-theme" onClick={handleTheme}>
                {  theme === "dark" ? <FaSun className="sun"/> : <FaMoon className="moon"/>} 
              </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
