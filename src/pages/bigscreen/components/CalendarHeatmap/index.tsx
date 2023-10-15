import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import styles from './index.module.less';
import { EChartsOption } from 'echarts-for-react';

export default function CalendarHeatmap() {
  const chartDom = useRef<HTMLDivElement | null>(null);
  function getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([echarts.time.format(time, '{yyyy}-{MM}-{dd}', false), Math.floor(Math.random() * 10000)]);
    }
    return data;
  }
  const option: echarts.EChartsOption = {
    tooltip: {
      formatter: (p) => `<div>${p.marker}${p.value[0]}：${p.value[1]}h</div>`
    },
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      bottom: 50,
      textStyle: {
        color: '#fff'
      }
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2023',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false },
      dayLabel: {
        color: '#fff',
        nameMap: 'ZH',
        fontSize: 10
      },
      monthLabel: {
        color: '#fff',
        nameMap: 'ZH'
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtualData('2023')
    }
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
