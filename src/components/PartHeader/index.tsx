import React from 'react';
import styles from './index.module.less';

interface PartHeaderProps {
  title: string;
  icon: string;
}

const PartHeader = ({ title, icon }: PartHeaderProps) => (
  <header className={styles['container']}>
    <h3>{title}</h3>
    <img src={icon} />
  </header>
);

export default PartHeader;
