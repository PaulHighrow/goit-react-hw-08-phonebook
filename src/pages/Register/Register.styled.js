import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;

  padding: 30px;
`;

export const Logo = styled(Link)`
  display: block;

  font-family: Genos;
  font-size: 40px;
  font-style: italic;

  line-height: 1.6;

  color: #4682b4;
  transition: var(--animation-global);

  &:hover,
  &:focus {
    color: #000080;
    filter: drop-shadow(var(--shadow-global));
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-width: 205px;
`;

export const Label = styled.label`
  display: flex;
  text-align: left;
  flex-direction: column;

  gap: 4px;

  font-size: 16px;
  line-height: 1.2;
`;
