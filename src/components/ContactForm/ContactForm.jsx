import { Formik } from 'formik';
import { useContacts } from 'hooks/useContacts';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { contactSchema } from 'utils/schemas';
import { Button, Error, Input, Label, StyledForm } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      toast.error(`Sorry, ${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
    toast.success('Contact successfully added!');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
