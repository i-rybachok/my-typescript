// * Base
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

// * Components
import Wrapper from '../../../components/Wrapper/Wrapper';
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';

// * Types
import { TData } from '../../../components/types/Data.types';

// * Custom hooks
import useTitle from '../../../hooks/useTitle.hook';

const URL: string = 'https://jsonplaceholder.typicode.com/posts';

const getDetail = () => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState(false);
  const { id } = useParams();
  useTitle({ title: data?.title || 'Loading' });

  const getListDetail = () => {
    axios
      .get(URL + `/${id}`)
      .then((response) => {
        console.log(response.data);
        response.status === 200 && setData(response.data);
      })
      .catch(() => {
        // setError(true);
        console.log('Error');
      });
  };

  useEffect(() => {
    getListDetail();
  }, []);

  if (error) return <Error error='Error' />;
  if (!data) return <Loading />;

  return (
    <Wrapper>
      <p>Id: {id}</p>
      <p>Title: {data ? data.title : 'No title'}</p>
      <p>Details: {data ? data.body : 'No additional information'}</p>
    </Wrapper>
  );
};

export default getDetail;
