// * Components
import Button from '../Button/Button';

// * Types
import { EButton } from '../types/Button.types';

// * Local types
type TProps = {
  error: string;
  onClick?: () => any;
};

const Error: React.FC<TProps> = ({ error, onClick }) => {
  return (
    <>
      <p>{error}</p>
      <Button
        type={EButton.BUTTON}
        text='Retry'
        onClick={onClick}
        whiteMode={true}
      />
    </>
  );
};

export default Error;
