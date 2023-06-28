import { createBrowserRouter } from 'react-router-dom';
import App from '../components/app';
import Register from '../components/Registration/registration';
import Login from '../components/Login/login';
import Consultation from '../components/Consultation/consultaion';
import Profile from '../components/Profile/profile';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/consultation',
        element: <Consultation />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      // {
      //     path: '/route/list',
      //     element: (
      //       <PrivateRouting>
      //         <RouteListing />,
      //       </PrivateRouting>
      //     ),
      //   },
    ],
  },
]);

export default router;
