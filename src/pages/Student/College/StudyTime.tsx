import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/bar.png';
import BarChart from 'components/BarChart';
import { IComparison, Process } from 'types/college';
import PartHeader from '@/components/PartHeader';

interface StudyTimeProps {
  data: IComparison;
}

const StudyTime: React.FC<StudyTimeProps> = ({ data }) => {
  const prepare = data?.process?.find((item) => item.content === '当前所花时间') as Process;
  const review = data?.process?.find((item) => item.content === '复习进度') as Process;
  const dailyStudy = data?.process?.find((item) => item.content === '每天学习时间') as Process;
  const exercise = data?.process?.find((item) => item.content === '每周锻炼时间(小时)') as Process;

  const getRate = (num: number) => Number((num * 100).toFixed(2));

  return (
    <div className={styles['college-time']}>
      <PartHeader title="学习时长" icon={iconImg} />

      <main>
        <div className={styles['bar-box']}>
          <BarChart title="当前所花时间(h)" data={[prepare?.failed, prepare?.student, prepare?.success]} />
          <BarChart title="复习进度(%)" data={[getRate(review?.failed), getRate(review?.student), getRate(review?.success)]} />
          <BarChart title="每天学习时间(h)" data={[Number(dailyStudy?.failed.toFixed(1)), Number(dailyStudy?.student.toFixed(1)), Number(dailyStudy?.success.toFixed(1))]} />

          <BarChart title="每周锻炼时间(h)" data={[exercise?.failed, exercise?.student, exercise?.success]} />
        </div>
      </main>
    </div>
  );
};

export default StudyTime;
