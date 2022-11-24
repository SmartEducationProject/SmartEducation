import Approve from '@/pages/Teacher/Approve';
import { lazy } from 'react';
const Message = lazy(() => import('pages/Teacher/PredictResult'));
const UncommittedPage = lazy(() => import('pages/Teacher/UnCommitted'));
const StudentInfo = lazy(() => import('pages/Teacher/StudentInfo'));
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
  },
  {
    key: 'studentInfo',
    path: 'studentInfo',
    element: StudentInfo,
    role: 'teacher',
    backUrl: '/'
  }
];
