import { ChangeEvent, ReactNode } from 'react';

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
  error: ReactNode;
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
  return (
    <label>
      <div>{title}</div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={styles.field}
      />
      <div className={styles.error}>{error}</div>
    </label>
  );
};

export default FormInput;
