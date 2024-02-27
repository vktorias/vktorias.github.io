import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <div class="logo-container">
        <h1>
          <strong>Viktoria Wallström</strong>
        </h1>
      </div>
      <ul class="menu-links">
        <li>
          <NavLink to="/home" className="nav-link" activeClassName="active">
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            Om mig
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className="nav-link" activeClassName="active">
            CV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName="active"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
