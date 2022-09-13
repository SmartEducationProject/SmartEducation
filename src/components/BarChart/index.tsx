import ReactECharts from 'echarts-for-react';
import React from 'react';
/**
 * @description 实现不同柱状有不同的渐变色
 */
const colorList = () => {
  const colors = [
    { from: 'rgb(29,96,173)', to: 'rgb(110,196,189)' },
    { from: 'rgb(53,117,83)', to: 'rgb(112,197,190)' },
    { from: 'rgb(232,62,91)', to: 'rgb(243,199,68)' }
  ];

  return colors.map((item) => {
    return {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { offset: 0, color: item.from },
        { offset: 1, color: item.to }
      ]
    };
  });
};

interface BarChartProp {
  data: number[];
  title?: string;
}

const BarChart: React.FC<BarChartProp> = ({ data, title }) => {
  const option = {
    title: {
      text: title,
      left: 'center',
      top: 'bottom',
      textStyle: {
        fontSize: 15,
        color: '#363638'
      }
    },
    xAxis: {
      type: 'category',
      data: ['总体', '你的', '上岸'],
      axisLine: { show: false } // 不展示x轴
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false }, //去除网格线
      axisLabel: { show: false } // 不展示y轴数值
    },
    series: [
      {
        data,
        type: 'bar',
        barWidth: '45%', //柱图宽度
        label: {
          show: true, //开启显示
          position: 'top' //在上方显示
        },
        itemStyle: {
          color: function (params: { dataIndex: number }) {
            return colorList()[params.dataIndex];
          }
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ width: '15%', height: '100%' }} />;
};

export default BarChart;
