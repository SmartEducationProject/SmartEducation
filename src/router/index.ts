import Login from 'pages/Login';
import Students from '@/pages/Student';
import Teacher from 'pages/Teacher';
import { IRouter } from 'types';

const routers: IRouter[] = [
  {
    key: 'login',
    path: '/',
    component: Login
  },
  {
    key: 'students',
    path: '/students',
    component: Students
  },
  {
    key: 'teacher',
    path: '/teacher',
    component: Teacher
  }
];
export default routers;
