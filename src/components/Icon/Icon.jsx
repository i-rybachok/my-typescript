// * Base
import cn from 'classnames';

// * Data
import ICONS from './Icon.data.jsx';

// * Styles
import styles from './Icon.module.css';

const Icon = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
