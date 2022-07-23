import Login from 'pages/Login';
import Student from 'pages/Student';
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
    path: '/student/*',
    component: Student
  },
  {
    key: 'teacher',
    path: '/teacher',
    component: Teacher
  }
];
export default routers;
