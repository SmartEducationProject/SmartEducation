import React from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './index.module.less';
import blueBackground from 'assets/pic/student/college-process-blue.png';
import redBackground from 'assets/pic/student/college-process-red.png';
import greenBackground from 'assets/pic/student/college-process-green.png';

const colorList = [
  { dark: 'rgb(39,133,99)', light: 'rgb(58, 166, 147)' },
  { dark: 'rgb(232,63,19)', light: 'rgb(244,217,197)' },
  { dark: 'rgb(56,85,165)', light: 'rgb(45,158,218)' }
];

const backgroundList = [greenBackground, redBackground, blueBackground];

interface PieDoughnutProps {
  index: number; // 序号
  subject: string; // 科目
  require: number; // 需要投入时间
  complete: number; // 已完成时间
}

const PieDoughnut: React.FC<PieDoughnutProps> = ({ index, subject, require, complete }) => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: subject,
        type: 'pie',
        radius: ['30%', '52%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: complete, name: '你已学习了' },
          { value: require - complete, name: '还需投入' }
        ],
        itemStyle: {
          color: function (params: { dataIndex: number }) {
            return [colorList[index % colorList.length].dark, colorList[index % colorList.length].light][params.dataIndex];
          }
        }
      }
    ]
  };

  return (
    <div className={styles['container']}>
      <ReactECharts option={option} style={{ width: '200%' }} />
      <div className={styles['sentence-box']} style={{ backgroundImage: `url(${backgroundList[index % backgroundList.length]})`, color: colorList[index % colorList.length].dark }}>
        <p>
          {subject}需要投入{require}小时
        </p>
        <p>你已经学习{complete}小时</p>
      </div>
    </div>
  );
};

export default PieDoughnut;
