// * Base
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
// import logo from '../assets/logo.png';
// * Styles
import styles from './Header.module.css';

const Header = memo(() => {
  const signIn = useCallback(() => console.log('You signed in'), []);
  const signUp = useCallback(() => console.log('You signed up'), []);

  return (
    <header className={styles.header}>
      <Wrapper className={[styles.wrapper]}>
        <Link to='/' className={styles.logo}>
          {/* <img src={logo} alt='logo' /> */}
          <Icon icon='logo' />
        </Link>
        <Navigation />
        <div className={styles.buttons}>
          <Button text='Sign In' callback={signIn} whiteMode={true} />
          <Button text='Sign Up' callback={signUp} />
        </div>
      </Wrapper>
    </header>
  );
});

export default Header;
