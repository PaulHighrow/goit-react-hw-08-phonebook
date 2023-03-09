// import { Title } from './Title/Title';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { ROUTES } from 'utils/routes';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const RegisterPage = lazy(() =>
  import(/* webpackChunkName: "Register" */ '../pages/Register/Register')
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "Login" */ '../pages/Login/Login')
);
const ContactsPage = lazy(() =>
  import(/* webpackChunkName: "Contacts" */ '../pages/Contacts/Contacts')
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "Not Found" */ '../pages/NotFound/NotFound')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={ROUTES.REGISTER}
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path={ROUTES.LOGIN}
          element={<RestrictedRoute component={<LoginPage />} />}
        />

        <Route
          path={ROUTES.CONTACTS}
          element={
            <PrivateRoute
              redirectTo={ROUTES.LOGIN}
              component={<ContactsPage />}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
