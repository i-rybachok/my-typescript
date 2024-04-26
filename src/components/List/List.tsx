// * Base
import axios from 'axios';
import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';

// * Components
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './List.module.css';

// * Local types
type TProps = {
  id: string; // бо він може бути не тільки числом
  title: string;
  body: string;
};

const URL: string = 'https://jsonplaceholder.typicode.com/posts';

const List = () => {
  const [state, setState] = useState({ list: [], error: '', loading: true });
  const commonId = useId(); // Create a unique id

  const getList = () => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response);
        setState((prevState) => ({
          ...prevState,
          list: response.data,
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
          <Item
            key={`list-item-${id}-${commonId}`}
            id={id}
            title={title}
            body={body}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

const Item: React.FC<TProps> = ({ id, title, body }) => {
  return (
    <li>
      <Link to={`/list/${id}`} className='font-bold'>
        {title}
      </Link>
      <p>{body}</p>
    </li>
  );
};

const Empty = () => {
  return <div>The list is empty</div>;
};

export default List;
