// * Base
import axios from 'axios';
import { useEffect, useId, useState } from 'react';

// * Components
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './List.module.css';

const List = () => {
  const [state, setState] = useState({ list: [], error: '', loading: true });
  const commonId = useId(); // Create a unique id

  const getList = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          list: data,
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          error: 'There was an error during the loading of the list',
        }));
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      });
  };

  useEffect(() => {
    getList();
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <Error error={state.error} onClick={getList} />;
  }

  if (!state.list.length) {
    return <Empty />;
  }

  return (
    <Wrapper>
      <ul className={styles.list}>
        {state.list.map(({ id, title, body }) => (
          <Item key={`list-item-${id}-${commonId}`} title={title} body={body} />
        ))}
      </ul>
    </Wrapper>
  );
};

const Item = ({ title, body }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

const Empty = () => {
  return <div>The list is empty</div>;
};

export default List;
