// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// * Components
import App from './App';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const List = lazy(() => import('./pages/List/List'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Error = lazy(() => import('./components/Error/Error'));

const Element = ({ page }) => {
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
        element: <Element page={<List />} />,
      },
      {
        path: '/signup',
        element: <Element page={<SignUp />} />,
      },
      {
        path: '*',
        element: <Element page={<Error />} />,
      },
    ],
  },
]);

export default routes;
