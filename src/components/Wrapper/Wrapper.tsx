// * Base
import cn from 'classnames';
import { ReactNode } from 'react';

// * Styles
import styles from './Wrapper.module.css';

// * Local types
type TProps = {
  children: ReactNode;
  className?: string[];
};

const Wrapper: React.FC<TProps> = ({ children, className = [] }) => {
  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
