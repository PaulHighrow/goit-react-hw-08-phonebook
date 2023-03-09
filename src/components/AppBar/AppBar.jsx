import { Navigation } from 'components/Navigation/Navigation';
import { StyledHeader } from './AppBar.styled';

export const AppBar = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};
