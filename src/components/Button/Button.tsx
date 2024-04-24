// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

// * Types
import { EButton } from '../types/Button.types';

// * Local types
type TProps = {
  type: EButton;
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  whiteMode?: boolean;
  bigMode?: boolean;
  orangeMode?: boolean;
};

const Button: React.FC<TProps> = ({
  type,
  onClick,
  text = 'Default',
  disabled,
  whiteMode,
  bigMode,
  orangeMode,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        styles.button,
        whiteMode && styles.white,
        bigMode && styles.big,
        orangeMode && styles.orange
      )}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
