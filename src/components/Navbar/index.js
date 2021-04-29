import React from 'react';
import { menuData } from '../../data/MenuData';
import logoimg from '../../assets/logo_light.png';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './styles';
import { Button } from '../Button/Button';

const Navbar = () => {
  return (
    <Nav>
      <Logo>
          <img src={logoimg} alt="Caule Digital" />
      </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contato" primary={true}>Contato</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar;
