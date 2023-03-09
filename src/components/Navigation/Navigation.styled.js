import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  padding: 10px;
  border-radius: 5px;

  color: #000;
  background-color: #d5e3e1;

  transition: var(--animation-global);

  font-weight: 700;
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    color: #fff;
    background-color: #000080;
    box-shadow: var(--shadow-global);
  }
`;

export const Auth = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
