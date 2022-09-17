import Approve from '@/pages/Teacher/Approve';
import { lazy } from 'react';
const Message = lazy(() => import('pages/Teacher/PredictResult'));
const UncommittedPage = lazy(() => import('pages/Teacher/UnCommitted'));
export const teacherRoutes = [
  {
    key: 'predictresult',
    path: 'predictresult',
    element: Message,
    role: 'teacher',
    backUrl: '/'
  },
  {
    key: 'uncommitted',
    path: 'uncommitted',
    element: UncommittedPage,
    role: 'teacher',
    backUrl: '/'
  },
  {
    key: 'approve',
    path: 'approve',
    element: Approve,
    role: 'teacher',
    backUrl: '/'
  }
];
