import { Navigate, RouteObject } from 'react-router-dom';
import Student from 'pages/Student';
import Teacher from 'pages/Teacher';
import Choice from 'pages/Student/Choice';
import Questionnaire from 'pages/Student/Questionnaire';
import Welcome from 'pages/Student/Welcome';
import College from 'pages/Student/College';
import Message from 'pages/Teacher/PredictResult';
import UncommittedPage from '@/pages/Teacher/UnCommitted';
import Mine from 'pages/Student/Mine';
import Lib from 'pages/Student/Mine/Lib/Lib';
import Daily from 'pages/Student/Mine/Daily/Daily';
import Same from 'pages/Student/Mine/Same/Same';
import SignIn from 'pages/signin';

// TODO:路由守卫

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/student/*',
    element: <Student />,
    children: [
      {
        path: '',
        element: <Choice />
      },
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'questionnaire',
        element: <Questionnaire />
      },
      {
        path: 'college/:isCqupt',
        element: <College />
      },
      {
        path: 'mine/*',
        element: <Mine />,
        children: [
          {
            path: 'lib',
            element: <Lib />
          },
          {
            path: 'daily',
            element: <Daily />
          },
          {
            path: 'Same',
            element: <Same />
          },
          {
            path: '*',
            element: <Navigate to="lib" replace={true} />
          }
        ]
      },
      {
        path: '*',
        element: <Navigate to="" replace={true} />
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
