import styles from './index.module.less';
import { Link } from 'react-router-dom';
import React from 'react';

const mock1 = [
  // 高校经验分享
  {
    key: 1,
    college: '重庆邮电大学'
  },
  {
    key: 2,
    college: '电子科技大学'
  },
  {
    key: 3,
    college: '重庆大学'
  }
];
const mock2 = [
  {
    key: 1,
    subject: '政治'
  },
  {
    key: 2,
    subject: '英语'
  },
  {
    key: 3,
    subject: '专业课'
  }
];

export default function () {
  return (
    <>
      <div className={styles['wall']}>
        <h2>高校经验分享墙</h2>
        <ul>
          {mock1.map((item) => (
            <li key={item.key}>
              <Link to={'/student/share/wall'}>
                考研
                <span>{item.college}</span>
                经验分享墙
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['wall']}>
        <h2>高校自主命题分享墙</h2>
        <ul>
          {mock2.map((item) => (
            <li key={item.key}>
              <Link to={'/student/share/wall'}>
                <span>{item.subject}</span>
                经验分享墙
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
