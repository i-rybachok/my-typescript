import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

// * Styles
import styles from './Input.module.css';

// * Local types
type TProps = {
  title: string;
  type: string;
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
  value: string;
  placeholder: string;
  error?: TError | null;
};

export type TError = {
  key: string;
  config?: { [key: string]: string | number };
};

const FormInput: React.FC<TProps> = ({
  title,
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
}) => {
  const { t } = useTranslation();
  console.log(error);

  return (
    <label className='block'>
      <div>{t(title)}</div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={styles.field}
      />
      <div className={styles.error}>{error && t(error.key, error.config)}</div>
    </label>
  );
};

export default FormInput;
