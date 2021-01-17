import React from 'react';
import { NavLink } from 'react-router-dom';
  import './Menu.scss';

export default function Menu(){
    return (
        <nav className="c-menu">
        <ul className="c-menu__list">
          <li>
            <NavLink  exact className="c-menu__link" activeClassName="c-menu__link--active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="c-menu__link"  activeClassName="c-menu__link--active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="c-menu__link" activeClassName="c-menu__link--active"  to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    )
}