import {
  Button,
  Error,
  Input,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { Label, Logo, Text, Wrapper } from 'pages/Register/Register.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ROUTES } from 'utils/routes';
import { loginSchema } from 'utils/schemas';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <Text>
        Login to your account on <Logo to={ROUTES.CONTACTS}>Phonebook</Logo>
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <StyledForm>
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
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default Login;
