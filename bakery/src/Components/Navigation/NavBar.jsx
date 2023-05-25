import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-bar top">
      <ul className="nav-list">
        <li>
          <a href="/">Forside</a>
        </li>
        <li>
          <a href="/produkter">Produkter</a>
        </li>
        <h2 href="/">bageriet</h2>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
