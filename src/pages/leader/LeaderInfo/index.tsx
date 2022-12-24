import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.less';

import { addLeaderPv, getLeaderDetail } from '@/api/leader';
import { DetailInfo } from '@/types/leader';
import Loading from '@/components/Loading';
import Description from './Description';

export default function LeaderInfo() {
  const location = useLocation();

  let sfrzm: string = location.state;

  let [detail, setDetail] = useState<DetailInfo>();

  let timer: any = null;

  function addPv() {
    timer = setTimeout(() => {
      addLeaderPv({ sfrzm }); //在页面停留超过5s即可添加pv数量 ，这里的逻辑有待优化(主要是后端逻辑)
    }, 5000);
  }

  async function getDetial() {
    let result: DetailInfo = await getLeaderDetail({ sfrzm });
    setDetail(result);
  }

  useEffect(() => {
    addPv();
    return () => {
      // console.log('不发起请求');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    getDetial();
  }, []);

  return (
    <div className={styles['detail-container']}>
      <div className={styles['des-container']}>
        {!detail && <Loading />}
        {detail && <Description detail={detail!}></Description>}
      </div>
    </div>
  );
}
