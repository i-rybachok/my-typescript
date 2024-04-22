// * Components
import Button from '../Button/Button';

const Error = ({ error, onClick }) => {
  return (
    <>
      <p>{error}</p>
      <Button text="Retry" onClick={onClick} whiteMode={true} />
    </>
  );
};

export default Error;
