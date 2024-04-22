// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default',
  type = 'button',
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
