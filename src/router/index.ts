import { FunctionComponent } from 'react';
import Login from '../pages/Login';
import Students from '../pages/students';
import Teacher from '../pages/Teacher';
interface RouterType {
  key: string;
  path: string;
  component: FunctionComponent;
}
const routers: RouterType[] = [
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
