import React from 'react';
import ReactECharts from 'echarts-for-react';

interface LabelLinePieProps {
  data?: {
    name: string;
    total: number;
  }[];
}

const LabelLinePie: React.FC<LabelLinePieProps> = ({ data }) => {
  const newData = (data || [])
    .map((item) => {
      return { name: item.name, value: item.total };
    })
    .sort(function (a, b) {
      return a.value - b.value;
    });

  const option = {
    // visualMap: {
    //   orient: 'horizontal',
    //   left: 'center',
    //   top: 'bottom',
    //   min: 0,
    //   max: newData[newData.length - 1]?.value || 0,
    //   show: false,
    //   dimension: 0,
    //   inRange: {
    //     color: ['#ff2d2d', '#d6db44', , '#2f5896', , '#4eee4e', 'rgb(238,137,78)']
    //   }
    // },
    series: {
      type: 'pie',
      radius: [50, 100],
      // color: ['rgb(57,122,90)', 'pink', 'rgb(98,182,186)', '#48ba81', '#ff0015', '#fdc135', '#8e43b1', '#38cf36', '#f15c36', 'rgb(74,118,88)'],
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5
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
      data: newData
    }
  };

  return (
    <div>
      <ReactECharts option={option} style={{ width: '98%', height: '260%' }} />
    </div>
  );
};

export default LabelLinePie;
