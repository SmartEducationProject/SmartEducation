import Login from 'pages/Login';
import Student from 'pages/Student';
import Teacher from 'pages/Teacher';
import { PathRouteProps } from 'react-router-dom';

const routers: PathRouteProps[] = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/student/*',
    element: <Student />
  },
  {
    path: '/teacher',
    element: <Teacher />
  }
];
export default routers;
