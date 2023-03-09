import {
  Button,
  Error,
  Input,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { registrationSchema } from 'utils/schemas';
import { Label, Logo, Text, Wrapper } from './Register.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Text>
        Create your private account to use <Logo>Phonebook</Logo>
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <StyledForm>
          <Wrapper>
            <Label>
              <span>Your name</span>
              <Input type="text" name="name" />
              <Error component="div" name="name" />
            </Label>
          </Wrapper>
          <Wrapper>
            <Label>
              <span>EMail</span>
              <Input type="email" name="email" />
              <Error component="div" name="email" />
            </Label>
          </Wrapper>
          <Wrapper>
            <Label>
              <span>Password</span>
              <Input type="password" name="password" />
              <Error component="div" name="password" />
            </Label>
          </Wrapper>
          <Button type="submit">Sign Up</Button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default Register;
