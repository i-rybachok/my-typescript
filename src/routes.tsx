// * Base
import { createBrowserRouter } from 'react-router-dom';
import { ReactNode, Suspense, lazy } from 'react';

// * Components
import App from './App';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const Lists = lazy(() => import('./pages/ListPosts/Lists'));
const ListPosts = lazy(() => import('./pages/ListPosts/ListPosts/ListPosts'));
const Detail = lazy(() => import('./pages/ListPosts/Detail/Detail'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Error = lazy(() => import('./components/Error/Error'));

const Element = ({ page }: { page: ReactNode }) => {
  return <Suspense fallback={<Loading />}>{page}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element page={<Main />} />,
      },
      {
        path: '/list',
        element: <Element page={<Lists />} />,
        children: [
          {
            path: '',
            element: <Element page={<ListPosts />} />,
          },
          {
            path: ':id',
            element: <Element page={<Detail />} />,
          },
        ],
      },
      {
        path: '/signup',
        element: <Element page={<SignUp />} />,
      },
      {
        path: '*',
        element: <Element page={<Error error='Error' />} />,
      },
    ],
  },
]);

export default routes;
