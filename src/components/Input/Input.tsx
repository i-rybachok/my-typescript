import { ChangeEvent, ReactNode } from 'react';

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
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <div className='text-sm h-1 text-red-600 dark:text-red-500 mb-5'>
        {error}
      </div>
    </label>
  );
};

export default FormInput;
