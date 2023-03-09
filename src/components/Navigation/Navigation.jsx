import { Auth, StyledNavLink } from 'components/Navigation/Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { ROUTES } from 'utils/routes';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
      {isLoggedIn ? (
        <>
          <StyledNavLink to={ROUTES.CONTACTS}>Contacts</StyledNavLink>
          <UserMenu />
        </>
      ) : (
        <Auth>
          <StyledNavLink to={ROUTES.REGISTER}>Sign Up</StyledNavLink>
          <StyledNavLink to={ROUTES.LOGIN}>Sign In</StyledNavLink>
          <UserMenu />
        </Auth>
      )}
    </>
  );
};
