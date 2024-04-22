import { Formik } from 'formik';
import Input from '../Input/Input';

const INITIAL_VALUES = { username: '', email: '', password: '' };
const EMAIL_REG_EXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_MIN_LENGTH = 8;

const Form = () => {
  const validators = ({ username, email, password }) => {
    const errors = {};

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

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('values: ', values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <Formik
      preventDefault
      initialValues={INITIAL_VALUES}
      validate={validators}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            title='Username'
            type='username'
            name='username'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <div>{errors.username && touched.username && errors.username}</div>

          <Input
            title='Email'
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div>{errors.email && touched.email && errors.email}</div>

          <Input
            title='Password'
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div>{errors.password && touched.password && errors.password}</div>

          <button type='submit' disabled={isSubmitting}>
            <span>Submit</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
