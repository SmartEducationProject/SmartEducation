import React, { useEffect, useState } from 'react';
import styles from './index.module.less';

export default function Header() {
  const examTime = new Date('2023-12-24').getTime();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatter = new Intl.DateTimeFormat('zh-CN', options);
  const [nowTime, setNowTime] = useState(new Date());
  const [days, setDays] = useState(Math.floor((examTime - nowTime.getTime()) / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60)) / 1000));

  useEffect(() => {
    setInterval(() => {
      setNowTime(new Date());
    }, 1000);
  }, []);
  useEffect(() => {
    setDays(Math.floor((examTime - nowTime.getTime()) / (1000 * 60 * 60 * 24)));
    setHours(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor(((examTime - nowTime.getTime()) % (1000 * 60)) / 1000));
  }, [nowTime]);

  return (
    <>
      <header>
        <div className={styles['left']}>{formatter.format(nowTime)}</div>
        <div className={styles['center']}>智慧教育系统</div>
        <div className={styles['right']}>
          距离23年考研还有
          <span>{Math.floor((examTime - nowTime.getTime()) / (1000 * 60 * 60 * 24) / 10)}</span>
          <span>{Math.floor(((examTime - nowTime.getTime()) / (1000 * 60 * 60 * 24)) % 10)}</span>天
        </div>
      </header>
      <div className={styles['detailTime']}>
        <span>{days}</span>天<span>{hours}</span>时<span>{minutes}</span>分<span>{seconds}</span>秒
      </div>
    </>
  );
}
