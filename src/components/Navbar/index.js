import React from 'react';
import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/" />
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} primary={true}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Navbar;
