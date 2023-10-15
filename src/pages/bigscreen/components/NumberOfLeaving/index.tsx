import React, { useRef, useState } from 'react';
import styles from './index.module.less';

export default function NumberOfLeaving() {
  interface DataType {
    yesterday: number;
    lastWeek: number;
  }
  const data: DataType[] = [
    {
      yesterday: 4,
      lastWeek: 15
    },
    {
      yesterday: 6,
      lastWeek: 21
    },
    {
      yesterday: 8,
      lastWeek: 51
    },
    {
      yesterday: 5,
      lastWeek: 31
    },
    {
      yesterday: 7,
      lastWeek: 19
    }
  ].sort((a, b) => b.lastWeek - a.lastWeek);
  const colors = ['#4ef39d', '#31b9cf', '#265e88', '#313bd3', '#3dccac'];
  const max = data[0].lastWeek;
  const onceItem = 8;
  const tbody = useRef<HTMLDivElement | null>(null);
  const [nowData] = useState(data.slice(0, onceItem * 2));

  return (
    <div className={styles['wrap']}>
      <div className={styles['title']}>昨日出校次数排行</div>
      <div ref={tbody} className={styles['tableWrap']}>
        <table>
          <thead>
            <tr className={styles['head']}>
              <th>排序</th>
              <th>昨日出校次数</th>
              <th>上周出校次数</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {nowData.map((e, i) => (
              <tr key={i} className={styles['column']}>
                <td>
                  <span>{i + 1}</span>
                  <svg
                    style={{ display: i <= 2 ? 'block' : 'none', fill: i == 0 ? '#ddba5e' : i === 1 ? '#adb3bb' : '#c2b4b6' }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4125"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M864 64l-768 0C78.336 64 64 78.336 64 96S78.336 128 96 128L128 128l0 857.6c0 28.544 33.152 46.208 59.2 31.488l258.752-145.856c20.928-11.904 47.168-11.904 68.096 0l258.752 145.856C798.848 1031.808 832 1014.208 832 985.6L832 128l32 0C881.664 128 896 113.664 896 96S881.664 64 864 64z"
                      p-id="4126"
                    ></path>
                  </svg>
                </td>
                <td>{e.yesterday}</td>
                <td>{e.lastWeek}</td>
                <td>
                  <div className={styles['bar']}>
                    <div
                      style={{
                        right: `${8 - (e.lastWeek / max) * 8}vw`,
                        backgroundColor: colors[Math.floor(Math.random()) * 5]
                      }}
                      className={styles['inner']}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
