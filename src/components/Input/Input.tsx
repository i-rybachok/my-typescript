import { ChangeEvent } from 'react';

// * Local types
type TProps = {
  title: string;
  type: string;
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
  value: string;
};

const FormInput: React.FC<TProps> = ({
  title,
  type,
  name,
  onChange,
  onBlur,
  value,
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
      />
    </label>
  );
};

export default FormInput;
