import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import { Popover } from 'antd';
import ViewCount from '../viewCount';
import { LeaderItem as LeaderItemType } from '@/types/leader';

export default function LeaderItem({ item }: { item: LeaderItemType }) {
  const navigate = useNavigate();
  const checkLeaderDetail = () => {
    localStorage.setItem('item', JSON.stringify(item));
    navigate(`/leader/leaderInfo`, { state: item.sfrzm });
  };
  return (
    <div className={styles['teacher-container']}>
      <li onClick={checkLeaderDetail}>
        <img src={item.avatar} alt="头像" />

        <div className={styles['name']}>{item.xm}</div>

        <div className={styles['title']}>{item.title}</div>

        <Popover content={item.rd}>
          <div className={styles['redirection']}>{item.rd}</div>
        </Popover>

        <div className={styles['views']}>
          <ViewCount pv={item.pv || 88} />
        </div>
      </li>
    </div>
  );
}
