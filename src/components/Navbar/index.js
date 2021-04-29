import React from 'react';
import { menuData } from '../../data/MenuData';
import logoimg from '../../assets/logo_light.png';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './styles';
import { Button } from '../Button/Button';

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
