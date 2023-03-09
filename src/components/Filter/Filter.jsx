import { useContacts } from 'hooks/useContacts';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const { filter } = useContacts();
  const dispatch = useDispatch();

  const onFilterInput = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={filter} onChange={onFilterInput} />
    </Label>
  );
};
