import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = ROUTES.CONTACTS,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
