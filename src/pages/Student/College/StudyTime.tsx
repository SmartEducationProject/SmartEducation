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
          <BarChart
            title="当前所花时间(h)"
            data={[prepare?.failed, prepare?.student, prepare?.success]}
            tooltipContents={['未上岸同学复习总共花费时间', '你目前花费时间', '上岸同学复习总共花费时间']}
          />
          <BarChart
            title="复习进度(%)"
            data={[getRate(review?.failed), getRate(review?.student), getRate(review?.success)]}
            tooltipContents={['未上岸同学当前复习进度', '你当前复习进度', '上岸同学当前复习进度']}
          />
          <BarChart
            title="每天学习时间(h)"
            data={[Number(dailyStudy?.failed.toFixed(1)), Number(dailyStudy?.student.toFixed(1)), Number(dailyStudy?.success.toFixed(1))]}
            tooltipContents={['未上岸同学每天学习时间', '你每天学习时间', '上岸同学每天学习时间']}
          />

          <BarChart title="每周锻炼时间(h)" data={[exercise?.failed, exercise?.student, exercise?.success]} tooltipContents={['未上岸同学每周锻炼时间', '你每周锻炼时间', '上岸同学每周锻炼时间']} />
        </div>
      </main>
    </div>
  );
};

export default StudyTime;
