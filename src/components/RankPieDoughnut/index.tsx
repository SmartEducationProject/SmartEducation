import React from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './index.module.less';

interface RankPieDoughnutProps {
  index: number;
  name: string;
  rank: number;
  exceed: number;
}

const pieColorList = ['rgb(102,183,192)', 'rgb(242,186,75)'];
const rankColorList = ['rgb(74,191,209)', 'rgb(243,162,73)'];
const totalColorList = ['rgb(133,181,219)', 'rgb(244,169,137)'];

const RankPieDoughnut: React.FC<RankPieDoughnutProps> = ({ index, name, rank, exceed }) => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    title: {
      text: name,
      left: 'center',
      top: '5%'
    },
    series: [
      {
        name,
        type: 'pie',
        radius: ['35%', '52%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: rank || 0, name: '你的排名' },
          { value: exceed, name: '超过了多少人' }
        ],
        itemStyle: {
          color: ({ dataIndex }: { dataIndex: number }) => ['#e1dede', pieColorList[index % pieColorList.length]][dataIndex]
        }
      }
    ]
  };

  return (
    <div className={styles['container']}>
      <div className={styles['number-box']}>
        <h1 style={{ color: rankColorList[index % pieColorList.length], borderBottom: `1px solid ${totalColorList[index % pieColorList.length]}` }}>{rank || 0}</h1>
        <h5 style={{ color: totalColorList[index % pieColorList.length] }}>{rank + exceed || 0}</h5>
      </div>
      <ReactECharts option={option} style={{ width: '100%' }} />
    </div>
  );
};

export default RankPieDoughnut;
