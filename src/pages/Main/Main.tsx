// * Base
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// * Components
import Button from '../../components/Button/Button';
import img from '../../components/assets/Image.png';
import Wrapper from '../../components/Wrapper/Wrapper';
import { EButton } from '../../components/types/Button.types';

// * Custom hooks
import useTitle from '../../hooks/useTitle.hook';

// * Styles
import styles from './Main.module.css';

const Banner = () => {
  // Without additional titles
  useTitle({ title: '' });

  const { t } = useTranslation();

  const [count, setCount] = useState<number>(0); // "useState(0)" is an example of a hook; in [number, setNumber] "number" is a state variable and "setNumber" is the setter function

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <h1 className={styles.title}>{t('design')}</h1>
          <p className={styles.text}>{t('describtion')}</p>
          <Button
            type={EButton.BUTTON}
            text={t('addition')}
            onClick={() => setCount((prev) => prev + 1)}
            bigMode={true}
          />
          <div>{count}</div>
        </section>
        <img src={img} alt='people' />
      </div>
    </Wrapper>
  );
};

export default Banner;
