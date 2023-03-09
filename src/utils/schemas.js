import * as yup from 'yup';

export let contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name is too short!')
    .matches(
      /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
      'Name must not contain digits'
    )
    .required('Name is required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Please enter a valid number!'
    )
    .required('Number is required!'),
});

export let loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      'Password must include at least one capital letter and one digit'
    )
    .required('Password is required!'),
});

export let registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name is too short!')
    .matches(
      /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
      'Name must not contain digits'
    )
    .required('Name is required!'),
  email: yup
    .string()
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      'Password must include at least one capital letter and one digit'
    )
    .required('Password is required!'),
});
