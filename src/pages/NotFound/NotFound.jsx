import { StyledNavLink } from 'components/Navigation/Navigation.styled';
import { Logo, Text } from 'pages/Register/Register.styled';
import { ROUTES } from 'utils/routes';
import { StyledImg } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Text>
        Nothing to see here, sorry!
        <Logo to={ROUTES.CONTACTS}>Phonebook</Logo>
      </Text>
      <StyledImg
        src="https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
        alt="Loading cat meme"
      />
      <StyledNavLink to={ROUTES.CONTACTS}>Go back</StyledNavLink>
    </>
  );
};

export default NotFound;
