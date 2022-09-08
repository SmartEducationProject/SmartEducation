import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-time.png';
import BarChart from 'components/BarChart';
import { IComparison, Process } from 'types/college';

interface StudyTimeProps {
  data: IComparison;
}

const StudyTime: React.FC<StudyTimeProps> = ({ data }) => {
  const prepare = data?.process.find((item) => item.content === '当前所花时间') as Process;
  const review = data?.process.find((item) => item.content === '复习进度') as Process;
  const dailyStudy = data?.process.find((item) => item.content === '每天学习时间') as Process;
  const exercise = data?.process.find((item) => item.content === '每周锻炼时间(小时)') as Process;

  return (
    <div className={styles['college-time']}>
      <header>
        <h2>学习时长</h2>
        <img src={iconImg} />
      </header>

      <main>
        <div className={styles['bar-box']}>
          <BarChart title="当前所花时间" data={[prepare.all, prepare.student, prepare.success]} />
          <BarChart title="复习进度" data={[review.all, review.student, review.success]} />
          <BarChart title="每天学习时间" data={[dailyStudy.all, dailyStudy.student, dailyStudy.success]} />
          <BarChart title="每周锻炼时间" data={[exercise.all, exercise.student, exercise.success]} />
        </div>
      </main>
    </div>
  );
};

export default StudyTime;
