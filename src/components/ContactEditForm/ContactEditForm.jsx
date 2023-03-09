import { Text } from 'components/Contact/Contact.styled';
import { Button, Error } from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { contactSchema } from 'utils/schemas';
import {
  CloseButton,
  CloseIcon,
  ToastForm,
  ToastInput,
} from './ContactEditForm.styled';

export const ContactEditForm = ({ defaultValues, toastId, toggleDisabled }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleToastSubmit = values => {
    if (
      contacts.some(
        contact => contact.name === values.name && contact.id !== values.id
      )
    ) {
      toast.error(`Sorry, ${values.name} is already in contacts.`);
      return;
    }
    if (
      values.name === defaultValues.name &&
      values.number === defaultValues.number
    ) {
      toast.dismiss(toastId);
      toast('No changes were made', { icon: '🆗' });
    } else {
      const editedValues = {
        id: defaultValues.id,
        name: values.name,
        number: values.number,
      };

      dispatch(editContact(editedValues));

      toast.dismiss(toastId);
      toast.success('Contact successfully edited!');
    }
    toggleDisabled(false);
  };

  const handleToastClose = () => {
    toast.dismiss(toastId);
    toggleDisabled(false);
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleToastSubmit}
      validationSchema={contactSchema}
    >
      <ToastForm>
        <Text>Edit Contact</Text>
        <ToastInput type="text" name="name" />
        <Error component="div" name="name" />
        <ToastInput type="tel" name="number" />
        <Error component="div" name="number" />
        <Button type="submit">Submit</Button>
        <CloseButton type="button" onClick={handleToastClose}>
          <CloseIcon />
        </CloseButton>
      </ToastForm>
    </Formik>
  );
};

ContactEditForm.propTypes = {
  defaultValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  toastId: PropTypes.string.isRequired,
  toggleDisabled: PropTypes.func.isRequired,
};
