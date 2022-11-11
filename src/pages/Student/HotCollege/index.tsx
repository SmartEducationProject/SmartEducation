import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

export default function HotCollege() {
  const navigate = useNavigate();

  return (
    <div className={styles['container']}>
      <div className={styles['left-choice']}>
        <button onClick={() => navigate('/student/college/1')} />
      </div>

      <div className={styles['right-choice']}>
        <button onClick={() => navigate('/student/college/2')} />
      </div>
    </div>
  );
}
