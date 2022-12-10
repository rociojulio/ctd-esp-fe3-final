import React, {useContext, useReducer} from 'react';
import {Link} from 'react-router-dom';

import ThemeContext from './utils/Theme';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

function handleTheme() {
  if(theme === "light") {
    return setTheme({type: "dark", payload: "dark"});
  } else {
    return setTheme({type:"light", payload: "light"});
  }
}

  return(
  <nav className="nav">
    <div>
      <div>
        <span>D</span>
        <span>H </span>
        <span>Odonto</span>
      </div>
      <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favs">Favs</Link>
          </li>
          <li className="nav-item">
            <button className='btnMoon' onClick={handleTheme}>
              <i className="fa-solid fa-moon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )


}

export default Navbar