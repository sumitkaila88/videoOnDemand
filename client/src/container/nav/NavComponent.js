import React from 'react';
import { NavLink } from 'react-router-dom';


import './navComponent.scss';

const Nav = (props) => {
  return (
    <nav className = "primaryNav">
    <ul>
      {props.navigation.map((navItem, index) => {
        return (
          <li key ={index} className = "navItem">
            <NavLink exact to={navItem.href}>
              {navItem.lable}
            </NavLink>
          </li>
        )
      })}
    </ul>
    </nav>
  );
}

export default Nav;