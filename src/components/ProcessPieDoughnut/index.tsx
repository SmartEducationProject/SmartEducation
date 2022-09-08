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
  month?: number; // 月份
  children?: React.ReactNode; // 子元素
}

const PieDoughnut = ({ index, subject, month, children }: PieDoughnutProps) => {
  console.log(children);

  const option = {
    // tooltip: {
    //   trigger: 'item'
    // },
    title: {
      text: subject,
      left: 'center',
      top: 'center',
      textStyle: {
        color: colorList[index % colorList.length].dark
      }
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
          { value: month || 1, name: '你已学习了' },
          { value: month || 1, name: '还需投入' }
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
        <div>{children ? children : <p>你开始复习的月份:{month}</p>}</div>
      </div>
    </div>
  );
};

export default PieDoughnut;
