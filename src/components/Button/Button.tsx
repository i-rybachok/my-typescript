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
  whiteMode?: boolean;
  bigMode?: boolean;
};

const Button: React.FC<TProps> = ({
  text = 'Default',
  type,
  whiteMode,
  bigMode,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        styles.button,
        whiteMode && styles.white,
        bigMode && styles.big
      )}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
