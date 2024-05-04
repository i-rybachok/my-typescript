// * Base
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Language from '../Language/Language';

// * Styles
import styles from './Header.module.css';
import { EButton } from '../types/Button.types';

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
          <Button
            type={EButton.BUTTON}
            text='sign-in'
            onClick={signIn}
            whiteMode={true}
          />
          <Button type={EButton.BUTTON} text='sign-up' onClick={signUp} />
        </div>
        <div>
          <Language />
        </div>
      </Wrapper>
    </header>
  );
});

export default Header;
