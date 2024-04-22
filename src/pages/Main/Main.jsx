// * Base
import { useState } from 'react';

// * Components
import Button from '../../components/Button/Button';
import img from '../../components/assets/Image.png';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Main.module.css';

const Banner = () => {
  const [count, setCount] = useState(0); // "useState(0)" is an example of a hook; in [number, setNumber] "number" is a state variable and "setNumber" is the setter function

  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <section className={styles.banner}>
          <h1 className={styles.title}>The Design Thinking superpowers</h1>
          <p className={styles.text}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button
            text="Add 1 to a number"
            onClick={() => setCount((prev) => prev + 1)}
            bigMode={true}
          />
          <div>{count}</div>
        </section>
        <img src={img} alt="people" />
      </div>
    </Wrapper>
  );
};

export default Banner;
