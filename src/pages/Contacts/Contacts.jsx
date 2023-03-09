import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Logo, Text } from 'pages/Register/Register.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ROUTES } from 'utils/routes';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Text>
        Manage your contacts in the
        <Logo to={ROUTES.HOME}>Phonebook</Logo>
      </Text>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactsList />}
    </>
  );
};

export default Contacts;
