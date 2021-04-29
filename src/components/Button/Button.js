import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px': '5px 20px')};
  border-radius: 20px;
  font-size: ${({ big }) => (big ? '20px' : '18px')};
  line-height: 25px;
  color: ${({ primary }) => (primary ? 'rgb(255, 255, 255)' : 'rgb(34, 33, 55)')}
`;