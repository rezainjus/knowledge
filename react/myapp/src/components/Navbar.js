import React from "react";
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar = (props) => {
  setTimeout(() => {
    props.history.push('/Home')
  },50)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand=logo"> Gamers Times</a>
        <ul className="right">
          <li>
            <a href="/Home"> Home </a>
          </li>
          <li>
            <a href="/About"> About </a>
          </li>
          <li>
            <a href="/Contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
