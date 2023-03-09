import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilterValue,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilterValue);

  return {
    contacts,
    isLoading,
    error,
    filter,
  };
};
