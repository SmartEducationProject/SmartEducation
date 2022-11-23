import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.module.less';
import { LeaderItem as LeaderItemType, LeaderPageInfo } from '@/types/leader';

import { Pagination } from 'antd';

import { getLeaderList, searchLeaderList } from '@/api/leader';

import LeaderItem from '../LeaderItem/Index';
import Searchs from '../Search';

const Leaders = () => {
  const [currentpage, setcurrentpage] = useState<number>(1);
  const [totalPg, setTotalPg] = useState<number>(1);

  const [leaderList, setLeaderList] = useState<LeaderItemType[]>([]);

  let setLeader = useCallback(setLeaderList, []);

  let newPageInfo: LeaderPageInfo;

  const getLeaderListFun = async () => {
    if (localStorage.getItem('currentPage')) {
      let localIndex = +localStorage.getItem('currentPage')!;
      newPageInfo = await getLeaderList({ page: localIndex.toString() });
      setcurrentpage(localIndex);
    } else {
      localStorage.setItem('currentPage', `${currentpage}`);
      newPageInfo = await getLeaderList({ page: currentpage.toString() });
    }

    let { current, items, total } = newPageInfo;
    setTotalPg(total); //设置页面总数
    setLeaderList(items); // 设置leaderList总数
  };

  const onChange = (index: number) => {
    setcurrentpage(index);
    localStorage.setItem('currentPage', `${index}`);
  };

  useEffect(() => {
    getLeaderListFun();

    return () => {
      // 卸载组件清除数据，避免再次进去出现bug
      localStorage.getItem('currentPage') && localStorage.removeItem('currentPage');
      // localStorage.getItem('item') && localStorage.removeItem('item')
    };
  }, [currentpage]);

  return (
    <div className={styles['leader-container']}>
      <div className={styles['search-container']}>
        <Searchs setTotalPg={setTotalPg} setLeaderList={setLeader} setcurrentpage={setcurrentpage} />
      </div>
      <ul className={styles['teacher-container']}>
        {leaderList.map((item: any) => {
          return <LeaderItem item={item} key={item.sfrzm} />;
        })}
      </ul>

      <div className={styles['pagination-container']}>
        <Pagination pageSize={8} current={+currentpage} onChange={onChange} total={totalPg} />
      </div>
    </div>
  );
};

export default Leaders;
