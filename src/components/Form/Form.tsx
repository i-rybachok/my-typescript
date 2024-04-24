// * Base
import { Formik, FormikValues } from 'formik';

// * Components
import Input from '../Input/Input';

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
  const validators = ({ username, email, password }: Readonly<TValues>) => {
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

  const onSubmit = (
    values: TValues,
    { setSubmitting, resetForm }: FormikValues
  ) => {
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
        <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
          <Input
            title='Username'
            type='username'
            name='username'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            placeholder='Username'
            error={errors.username && touched.username && errors.username}
          />

          <Input
            title='Email'
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='Email'
            error={errors.email && touched.email && errors.email}
          />

          <Input
            title='Password'
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='Password'
            error={errors.password && touched.password && errors.password}
          />

          <button
            type='submit'
            disabled={isSubmitting}
            className='text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-700 transition duration-150 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5'
          >
            <span>Submit</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
