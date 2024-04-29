// * Base
import { FormikValues, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  // Check all inputs (validate them)
  const validate = ({ username, email, password }: Readonly<TValues>) => {
    const errors: Partial<TValues> = {};

    if (!username) {
      errors.username = t('required');
    }

    if (!email) {
      errors.email = t('required');
    } else if (!EMAIL_REG_EXP.test(email)) {
      errors.email = t('invalid email');
    }

    if (!password) {
      errors.password = t('required');
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      // !!! Як тут змінити на t() ?
      // errors.password = t(`invalid password ${PASSWORD_MIN_LENGTH}`);
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
        title={t('username')}
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
        title={t('email')}
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
        title={t('password')}
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
        text={t('submit')}
        disabled={formik.isSubmitting}
        orangeMode
      />
    </form>
  );
};

export default Form;
