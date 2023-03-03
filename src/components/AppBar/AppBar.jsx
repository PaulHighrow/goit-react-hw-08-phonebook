import { Box } from 'components/Box/Box.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Title } from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, register } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const TITLE = {
  loggedIn: 'Nice to see you',
  notLoggedIn: 'Please, Log In',
};

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(
      register({
        name: 'qwert',
        email: 'qwerty12345@test.com',
        password: '123456789',
      })
    );
  };

  const handleLogin = () => {
    dispatch(logIn({ email: 'qwerty12345@test.com', password: '123456789' }));
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  const getContacts = () => {
    dispatch(fetchContacts());
  };

  return (
    <Box>
      <header>
        <Title
          title={
            isLoggedIn ? TITLE.loggedIn + `, ${user.name}` : TITLE.notLoggedIn
          }
        />
        {!isLoggedIn && <Button onClick={handleSignUp}>Sign up</Button>}
        {!isLoggedIn && <Button onClick={handleLogin}>Login</Button>}
        {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
        {isLoggedIn && <Button onClick={getContacts}>Get contacts</Button>}
        <Navigation />
      </header>
    </Box>
  );
};
