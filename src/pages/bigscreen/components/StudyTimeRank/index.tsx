import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';

export default function StudyTimeRank() {
  interface DataType {
    IDlast4: string;
    studyDuration: string;
    earliest: string;
    latest: string;
    no: number | string;
  }
  const data: DataType[] = [
    {
      IDlast4: '0211',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 1
    },
    {
      IDlast4: '0231',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 2
    },
    {
      IDlast4: '0361',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 3
    },
    {
      IDlast4: '0622',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 4
    },
    {
      IDlast4: '1622',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 5
    },
    {
      IDlast4: '1632',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 6
    },
    {
      IDlast4: '1652',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 7
    },
    {
      IDlast4: '1654',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 8
    },
    {
      IDlast4: '1658',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 9
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 10
    },
    {
      IDlast4: '1658',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 11
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 12
    },
    {
      IDlast4: '0211',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 13
    },
    {
      IDlast4: '0231',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 14
    },
    {
      IDlast4: '0361',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 15
    },
    {
      IDlast4: '0622',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 16
    },
    {
      IDlast4: '1622',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 17
    },
    {
      IDlast4: '1632',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 18
    },
    {
      IDlast4: '1652',
      studyDuration: '7h12min',
      earliest: '7:02am',
      latest: '10:21pm',
      no: 19
    },
    {
      IDlast4: '1654',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 20
    },
    {
      IDlast4: '1658',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 21
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 22
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 23
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 24
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 25
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 26
    },
    {
      IDlast4: '1659',
      studyDuration: '6h12min',
      earliest: '8:02am',
      latest: '9:21pm',
      no: 27
    }
  ];
  const emptyItem: DataType = {
    IDlast4: '',
    studyDuration: '',
    earliest: '',
    latest: '',
    no: ''
  };
  const onceItem = 6;
  const total = Math.floor(data.length / onceItem);
  const now = useRef(0);
  const tbody = useRef<HTMLDivElement | null>(null);
  const [nowData, setNowData] = useState(data.slice(0, onceItem * 2));
  useEffect(() => {
    const upDate = setInterval(() => {
      if (tbody.current) {
        tbody.current.scrollTo({ top: window.innerHeight * onceItem * 0.05, behavior: 'smooth' });
        setTimeout(() => {
          const next = now.current + 1;
          if (next < total) {
            const rest = data.slice(next * onceItem, (next + 2) * onceItem);
            if (next === total - 1) {
              // 最后一页凑不满，补空
              if (rest.length !== onceItem) {
                while (rest.length < onceItem * 2) {
                  rest.push(emptyItem);
                }
              } else {
                // 最后一页凑满，直接上第一页
                rest.push(...data.slice(0, onceItem));
              }
            }
            setNowData(rest);
            now.current++;
          } else {
            const rest = data.slice(next * onceItem, data.length);
            if (rest.length !== 0) {
              while (rest.length < onceItem) {
                rest.push(emptyItem);
              }
              now.current = -1;
              setNowData([...rest, ...data.slice(0, onceItem)]);
            } else {
              now.current = 0;
              setNowData(data.slice(0, 2 * onceItem));
            }
          }
          if (tbody.current) tbody.current.scrollTo({ top: 0 });
        }, 1000);
      }
    }, 2000);
    return () => {
      clearInterval(upDate);
    };
  }, []);

  return (
    <div className={styles['warp']}>
      <div className={styles['title']}>昨日图书馆学习时长排名</div>
      <div ref={tbody} className={styles['tableWrap']}>
        <table>
          <thead>
            <tr className={styles['head']}>
              <th>序号</th>
              <th>学号后4位</th>
              <th>学习时长</th>
              <th>最早进图时间</th>
              <th>最晚进图时间</th>
            </tr>
          </thead>
          <tbody>
            {nowData.map((e, i) => (
              <tr key={i} className={styles['column']}>
                <td>
                  <span style={{ backgroundColor: Number(e.no) <= 3 ? '#f14646' : '#22597e', display: e.no === '' ? 'none' : '' }}>{e.no}</span>
                </td>
                <td>{e.IDlast4}</td>
                <td>{e.studyDuration}</td>
                <td>{e.earliest}</td>
                <td>{e.latest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
