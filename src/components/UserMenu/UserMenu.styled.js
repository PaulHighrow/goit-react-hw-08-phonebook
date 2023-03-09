import styled from 'styled-components';
import { ImExit } from 'react-icons/im';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserText = styled.p`
  max-width: 120px;

  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
`;

export const LogOutButton = styled.button`
  display: flex;
  justify-content: center;

  border: none;
  background-color: transparent;
  color: #4682b4;
  transition: var(--animation-global);

  width: 24px;

  &:hover,
  &:focus,
  &:active {
    color: #000080;
    filter: drop-shadow(0 5px 15px rgb(0 0 0 / 35%));
  }
`;

export const LogOutIcon = styled(ImExit)`
  fill: currentColor;
  width: 24px;
  height: 24px;
`;
