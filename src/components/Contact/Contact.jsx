import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ButtonBox,
  DeleteIcon,
  EditIcon,
  IconButton,
  Text,
} from './Contact.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleDisabled = value => {
    setIsDisabled(value);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact was deleted!');
  };

  const createToastForm = () => {
    const defaultValues = { id, name, number };

    toast(
      t => {
        return (
          <ContactEditForm
            defaultValues={defaultValues}
            toastId={t.id}
            toggleDisabled={toggleDisabled}
          />
        );
      },
      {
        duration: Infinity,
      }
    );
  };

  const handleEdit = () => {
    setIsDisabled(true);
    createToastForm();
  };

  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <ButtonBox>
        <IconButton type="button" onClick={handleEdit} disabled={isDisabled}>
          <EditIcon />
        </IconButton>
        <IconButton type="button" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ButtonBox>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
