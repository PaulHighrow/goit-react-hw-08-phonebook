import { FooterLink, FooterText, StyledFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>Phonebook, GoIT (2023)</FooterText>
      <FooterLink
        href="https://t.me/Highrow"
        rel="noopener noreferrer"
        target="_blank"
      >
        Sulihan Kyrylo
      </FooterLink>
    </StyledFooter>
  );
};
