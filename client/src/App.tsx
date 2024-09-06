import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/create',
          element: <CreateUser />,
        },
        {
          path: '/edit/:id',
          element: <EditUser />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
