import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';

export default function LastYearRank() {
  interface DataType {
    name: string;
    applicants: string;
    admissions: string;
    percentage: string;
  }
  const data: DataType[] = [
    {
      name: '重庆邮电大学',
      applicants: '189',
      admissions: '121',
      percentage: '73.1%'
    },
    {
      name: '西南大学',
      applicants: '35',
      admissions: '12',
      percentage: '43.2%'
    },
    {
      name: '重庆大学',
      applicants: '21',
      admissions: '4',
      percentage: '20.1%'
    },
    {
      name: '南京邮电大学',
      applicants: '11',
      admissions: '2',
      percentage: '18%'
    },
    {
      name: '电子科技大学',
      applicants: '10',
      admissions: '1',
      percentage: '10%'
    }
  ];
  const emptyItem: DataType = {
    name: '',
    applicants: '',
    admissions: '',
    percentage: ''
  };
  const onceItem = 8;
  const tbody = useRef<HTMLDivElement | null>(null);
  const [nowData] = useState(data.slice(0, onceItem * 2));
  return (
    <div className={styles['warp']}>
      <div className={styles['title']}>19级考研数据一览</div>
      <div ref={tbody} className={styles['tableWrap']}>
        <table>
          <thead>
            <tr className={styles['head']}>
              <th>学校</th>
              <th>报考人数</th>
              <th>录取人数</th>
              <th>录取率</th>
            </tr>
          </thead>
          <tbody>
            {nowData.map((e, i) => (
              <tr key={i} className={styles['column']}>
                <td>{e.name}</td>
                <td>{e.applicants}</td>
                <td>{e.admissions}</td>
                <td>{e.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
