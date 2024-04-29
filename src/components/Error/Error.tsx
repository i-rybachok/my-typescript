// * Components
import Button from '../Button/Button';

// * Types
import { EButton } from '../types/Button.types';

// * Local types
type TProps = {
  text: string;
  onClick?: () => any;
};

const Error: React.FC<TProps> = ({ text, onClick }) => {
  return (
    <>
      <p>{text}</p>
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
