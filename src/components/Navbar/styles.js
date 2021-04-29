import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logoimg from '../../assets/logo_light.png';


export const Nav = styled.nav`
  height: 133px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  padding: 40px 50px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLink = css`
  color: ${({ primary }) => (primary ? 'rgb(255, 255, 255)' : 'rgb(34, 33, 55)')};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.1rem;
`;

export const Logo = styled(Link)`
    background-image: url(${logoimg});
    background-size: contain;
    background-repeat: no-repeat;
    height: 70px;
    width: 100px; 
`;

export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    height: 25px;
    width: 25px;
    cursor: pointer;
    transform: translate(-50%, 0%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;