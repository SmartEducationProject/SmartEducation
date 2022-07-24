import { Navigate, PathRouteProps } from 'react-router-dom';
import Welcome from 'pages/Student/Welcome';
import Questionnaire from 'pages/Student/Questionnaire';

const routers: PathRouteProps[] = [
  {
    path: 'welcome',
    element: <Welcome />
  },
  {
    path: 'questionnaire',
    element: <Questionnaire />
  },
  {
    path: '/teacher',
    element: <Navigate to="welcome" replace={true} />
  }
];
export default routers;
