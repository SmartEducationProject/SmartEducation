import React from 'react';
import ReactECharts from 'echarts-for-react';

interface LabelLinePieProps {
  data?: {
    name: string;
    total: number;
  }[];
}

const LabelLinePie: React.FC<LabelLinePieProps> = ({ data }) => {
  const option = {
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      top: 'bottom',
      min: 1,
      max: 23,
      show: false,
      dimension: 0,
      inRange: {
        color: ['rgb(234,87,87)', 'rgb(238,137,78)']
      }
    },
    series: {
      type: 'pie',
      radius: [50, 100],
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        color: '#16ff01'
      },
      label: {
        alignTo: 'edge',
        formatter: '{name|{b}}\n{time|{c}人报考}',
        minMargin: 5,
        fontSize: 14,
        edgeDistance: 10,
        lineHeight: 15,

        rich: {
          time: {
            fontSize: 12,
            color: '#999'
          }
        }
      },
      labelLine: {
        length: 10,
        length2: 5,
        maxSurfaceAngle: 90
      },
      data:
        data
          ?.map((item) => {
            return { name: item.name, value: item.total };
          })
          .sort(function (a, b) {
            return a.value - b.value;
          }) || []
    }
  };

  return (
    <div>
      <ReactECharts option={option} style={{ width: '98%', height: '250%' }} />
    </div>
  );
};

export default LabelLinePie;
