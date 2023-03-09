import styled from 'styled-components';

export const StyledFooter = styled.footer`
  text-align: center;
  border-top: 1px solid #b5b5b5;
  padding: 20px;
  font-size: 14px;
  line-height: 1.2;
`;

export const FooterText = styled.p`
  color: #969696;
`;

export const FooterLink = styled.a`
  color: #969696;
  transition: var(--animation-global);

  &:active,
  &:hover,
  &:focus {
    color: #4a24a2;
  }
`;
