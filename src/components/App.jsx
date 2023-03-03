import { Box } from './Box/Box.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { refreshUser } from 'redux/auth/operations';
import { fetchContacts } from 'redux/contacts/operations';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Box>
        <Title title={TITLES.form} />
        <ContactForm />
        <Title title={TITLES.contacts} />
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactsList />
        <Toaster />
      </Box>
    </>
  );
};
