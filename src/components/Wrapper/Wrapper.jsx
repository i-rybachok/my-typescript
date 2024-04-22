// * Base
import cn from 'classnames';

// * Styles
import styles from './Wrapper.module.css';

const Wrapper = ({ children, className = [] }) => {
  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
