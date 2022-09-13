import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SignIn from 'pages/signin';
const Student = lazy(() => import('pages/Student'));
const Teacher = lazy(() => import('pages/Teacher'));
const Choice = lazy(() => import('pages/Student/Choice'));
const Questionnaire = lazy(() => import('pages/Student/Questionnaire'));
const Welcome = lazy(() => import('pages/Student/Welcome'));
const College = lazy(() => import('pages/Student/College'));
const Message = lazy(() => import('pages/Teacher/PredictResult'));
const UncommittedPage = lazy(() => import('pages/Teacher/UnCommitted'));
const Mine = lazy(() => import('pages/Student/Mine'));
const Lib = lazy(() => import('pages/Student/Mine/Lib/Lib'));
const Same = lazy(() => import('pages/Student/Mine/Same/Same'));

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
          // {
          //   path: 'daily',
          //   element: <Daily />
          // },
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
