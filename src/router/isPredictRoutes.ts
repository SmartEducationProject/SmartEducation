import { lazy } from 'react';
const Choice = lazy(() => import('pages/Student/Choice'));
const Questionnaire = lazy(() => import('pages/Student/Questionnaire'));
const Welcome = lazy(() => import('pages/Student/Welcome'));
const College = lazy(() => import('pages/Student/College'));
const Previous = lazy(() => import('pages/Student/Previous'));
const Mine = lazy(() => import('pages/Student/Mine'));
const Lib = lazy(() => import('pages/Student/Mine/Lib/Lib'));
const Same = lazy(() => import('pages/Student/Mine/Same/Same'));

export const isPredictRoutes = [
  {
    key: 'studentIndex',
    path: '',
    role: 'predict',
    element: Choice,
    backUrl: '/'
  },
  {
    key: 'college',
    path: 'college/:isCqupt',
    role: 'predict',
    element: College,
    backUrl: '/'
  },
  {
    key: 'previous',
    path: 'previous',
    role: 'predict',
    element: Previous,
    backUrl: '/'
  },
  {
    key: 'mine',
    path: 'mine/*',
    element: Mine,
    role: 'predict',
    backUrl: '/',
    children: [
      {
        key: 'mineLib',
        path: 'lib',
        role: 'predict',
        element: Lib,
        backUrl: '/'
      },
      {
        key: 'mineSame',
        path: 'Same',
        role: 'predict',
        element: Same,
        backUrl: '/'
      },
      {
        key: 'mineIndex',
        path: '*',
        role: 'predict',
        element: Lib,
        backUrl: '/'
      }
    ]
  },
  {
    key: 'welcome',
    path: 'welcome',
    element: Welcome,
    role: 'unPredict',
    backUrl: '/student'
  },
  {
    key: 'questionnaire',
    path: 'questionnaire',
    element: Questionnaire,
    role: 'unPredict',
    backUrl: '/student'
  }
];
