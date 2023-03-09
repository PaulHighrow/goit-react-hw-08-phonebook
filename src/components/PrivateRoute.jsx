import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

export const PrivateRoute = ({
  component: Component,
  redirectTo = ROUTES.HOME,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
