import React from 'react';
import PieDoughnut from 'components/ProcessPieDoughnut';
import PartHeader from 'components/PartHeader';
import useCqupt from 'utils/useCqupt';
import { IComparison, Process } from 'types/college';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-process.png';

interface StudyProcessProps {
  data: IComparison;
}

const StudyProcess: React.FC<StudyProcessProps> = ({ data }) => {
  const isCqupt = useCqupt();
  const math = data.process.find((item) => item.content === '数学一轮复习结束时间') as Process;
  const dataStructure = data.process.find((item) => item.content === '数据结构') as Process;
  const network = data.process.find((item) => item.content === '计算机网络') as Process;
  const english = data.process.find((item) => item.content === '英语复习开始时间') as Process;
  const system = !isCqupt ? (data.process.find((item) => item.content === '操作系统') as Process) : null;
  const composition = !isCqupt ? (data.process.find((item) => item.content === '计算机组成原理') as Process) : null;

  return (
    <div className={styles['college-process']}>
      <PartHeader title="学习进度" icon={iconImg} />

      <main>
        <div className={styles['pie-box']}>
          <PieDoughnut index={0} subject="数学" month={math.student} />
          <PieDoughnut index={1} subject="英语" month={english.student} />
          {/* <PieDoughnut index={2} subject="政治" month={math.student}  /> */}
          <PieDoughnut index={2} subject="专业课">
            <p>数据结构开始复习的月份:{dataStructure.student || '无'}</p>
            <p>计网开始复习的月份:{network.student || '无'}</p>
            {!isCqupt && (
              <>
                <p>操作系统开始复习的月份:{system?.student || '无'}</p>
                <p>计组开始复习的月份:{composition?.student || '无'}</p>
              </>
            )}
          </PieDoughnut>
        </div>
        <div className={styles['sentence-box']}>
          <div>{data.suggestion}</div>
        </div>
      </main>
    </div>
  );
};

export default StudyProcess;
