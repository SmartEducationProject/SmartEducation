import { Navigate, RouteObject } from 'react-router-dom';
import Login from 'pages/Login';
import Student from 'pages/Student';
import Teacher from 'pages/Teacher';
import Choice from '@/pages/Student/Choice';
import Questionnaire from 'pages/Student/Questionnaire';
import Welcome from 'pages/Student/Welcome';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/student/*',
    element: <Student />,
    children: [
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'questionnaire',
        element: <Questionnaire />
      },
      {
        path: '',
        element: <Choice />
      },
      {
        path: '*',
        element: <Navigate to="" replace={true} />
      }
    ]
  },
  {
    path: '/teacher',
    element: <Teacher />
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
