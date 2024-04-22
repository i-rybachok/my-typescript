// * Base
import cn from 'classnames';

// * Data
import ICONS, { TIconType } from './Icon.data.jsx';

// * Styles
import styles from './Icon.module.css';

// * Local types
type TProps = {
  className?: [];
  icon: TIconType;
};

const Icon: React.FC<TProps> = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox='0 0 32 32'>
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
