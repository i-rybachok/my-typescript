const FormInput = ({ title, type, name, onChange, onBlur, value }) => {
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
