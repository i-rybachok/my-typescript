// * Data
import LIST from './Navigation.data';

// * Base
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

// * Styles
import styles from './Navigation.module.css';

// * Local types
type TProps = {
  to: string;
  title: string;
  pathname: string;
};

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, to, title }) => (
          <Item
            key={`navigation-item-${id}`}
            to={to}
            title={title}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

const Item: React.FC<TProps> = ({ to, title, pathname }) => {
  const { t } = useTranslation();
  return (
    <li>
      <Link
        to={to}
        className={cn(
          styles.link,
          'hover:text-orange-500',
          pathname === to ? 'text-orange-500' : ''
        )}
      >
        {t(title)}
      </Link>
      {/* <Link> is better than <a> */}
    </li>
  );
};

export default Navigation;
