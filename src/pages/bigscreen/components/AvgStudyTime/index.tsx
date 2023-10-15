import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import styles from './index.module.less';

export default function AvgStudyTime() {
  const chartDom = useRef<HTMLDivElement | null>(null);

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (p: { value: any; marker: any }[]) {
        return `<div>${p[0].marker}每周平均学习时长:${p[0].value}h</div>`;
      }
    },
    xAxis: {
      type: 'category',
      data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
      axisLabel: {
        interval: 0,
        rotate: -40
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [8, 7.2, 7.7, 7.9, 7.2, 6.4, 6],
        type: 'bar',
        color: '#4efda4',
        barWidth: 12,
        label: {
          show: true,
          position: 'top',
          color: '#4efda4',
          formatter: '{c} h',
          fontSize: 10
        }
      }
    ]
  };

  useEffect(() => {
    const myChart = echarts.init(chartDom.current!);
    option && myChart.setOption(option);
  }, []);
  return (
    <div className={styles['wrap']}>
      <div className={styles['title']}>本周图书馆备考同学平均学习时长</div>
      <div ref={chartDom} className={styles['chartDom']}></div>
    </div>
  );
}
