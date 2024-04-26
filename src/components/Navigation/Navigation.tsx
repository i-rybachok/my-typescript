// * Data
import LIST from './Navigation.data';

// * Base
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

// * Styles
import styles from './Navigation.module.css';

// * Local types
type TProps = {
  href: string;
  text: string;
  pathname: string;
};

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, href, text }) => (
          <Item
            key={`navigation-item-${id}`}
            href={href}
            text={text}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
};

const Item: React.FC<TProps> = ({ href, text, pathname }) => {
  return (
    <li>
      <Link
        to={href}
        className={cn(
          styles.link,
          'hover:text-orange-500',
          pathname === href ? 'text-orange-500' : ''
        )}
      >
        {text}
      </Link>
      {/* <Link> is better than <a> */}
    </li>
  );
};

export default Navigation;
