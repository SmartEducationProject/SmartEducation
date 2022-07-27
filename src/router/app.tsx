import { Navigate, PathRouteProps, RouteObject } from 'react-router-dom';
import Questionnaire from 'pages/Student/Questionnaire';
import Welcome from 'pages/Student/Welcome';
import Login from 'pages/Login';
import Student from 'pages/Student';
import Teacher from 'pages/Teacher';
import Message from '@/pages/Teacher/PredictResult';
import UncommittedPage from '@/pages/Teacher/UnCommitted';
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
        path: '*',
        element: <Navigate to="welcome" replace={true} />
      }
    ]
  },
  {
    path: '/teacher/*',
    element: <Teacher />,
    children: [
      {
        path: 'predictresult',
        element: <Message />
      },
      {
        path: 'uncommitted',
        element: <UncommittedPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
];

export default routes;
