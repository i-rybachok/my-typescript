// * Data
import LIST from './Navigation.data';

// * Base
import { Link } from 'react-router-dom';

// * Styles
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, href, text }) => (
          <Item key={`navigation-item-${id}`} href={href} text={text} />
        ))}
      </ul>
    </nav>
  );
};

const Item = ({ href, text }) => {
  return (
    <li>
      <Link to={href} className={styles.link}>
        {text}
      </Link>
      {/* <Link> is better than <a> */}
      {/* <a href={href} className={styles.link}>
        {text}
      </a> */}
    </li>
  );
};

export default Navigation;
