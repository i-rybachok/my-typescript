// * Base
import { FormikValues, useFormik } from 'formik';

// * Components
import Input from '../Input/Input';
import Button from '../Button/Button';
import { EButton } from '../types/Button.types';

// * Local Types
type TValues = {
  username: string;
  email: string;
  password: string;
};

const INITIAL_VALUES: TValues = { username: '', email: '', password: '' };
const EMAIL_REG_EXP: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_MIN_LENGTH: number = 8;

const Form = () => {
  // Check all inputs (validate them)
  const validate = ({ username, email, password }: Readonly<TValues>) => {
    const errors: Partial<TValues> = {};

    if (!username) {
      errors.username = 'Required';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!EMAIL_REG_EXP.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Required';
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      errors.password = `Password should be at least ${PASSWORD_MIN_LENGTH} characters`;
    }

    return errors;
  };

  // * useFormik
  const formik = useFormik({
    // Pass initialValues
    initialValues: INITIAL_VALUES,
    // Validation
    validate,
    // What we do on submit:
    onSubmit: (values: TValues, { setSubmitting, resetForm }: FormikValues) => {
      console.log('values: ', values);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 2000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='max-w-sm mx-auto'>
      <Input
        title='Username'
        type='username'
        name='username'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        placeholder='Username'
        error={
          formik.errors.username &&
          formik.touched.username &&
          formik.errors.username
        }
      />

      <Input
        title='Email'
        type='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder='Email'
        error={
          formik.errors.email && formik.touched.email && formik.errors.email
        }
      />

      <Input
        title='Password'
        type='password'
        name='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder='Password'
        error={
          formik.errors.password &&
          formik.touched.password &&
          formik.errors.password
        }
      />

      <Button
        type={EButton.SUBMIT}
        text='Submit'
        disabled={formik.isSubmitting}
        orangeMode
      />
    </form>
  );
};

export default Form;
