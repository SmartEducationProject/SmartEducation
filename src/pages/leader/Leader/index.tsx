import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.less';
import { LeaderItem as LeaderItemType, LeaderPageInfo } from '@/types/leader';

import { Pagination } from 'antd';

import { getLeaderList, searchLeaderList } from '@/api/leader';

import LeaderItem from '../LeaderItem/Index';

import { sessionKey } from '../Search';
import Searchs from '../Search';

const Leaders = () => {
  const location = useLocation();
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

  const searchList = async () => {
    let result: LeaderPageInfo = await searchLeaderList({ inquire: sessionKey('get', 'key'), page: +localStorage.getItem('currentPage')! });

    let { total, items, current } = result;
    setTotalPg(total); //设置页面总数
    setLeaderList(items); // 设置leaderList总数
  };

  const onChange = (index: number) => {
    //保存index 当前页数
    setcurrentpage(index);
    localStorage.setItem('currentPage', `${index}`);

    // 查看 是否处于搜索逻辑
    if (sessionKey('get', 'isSearching') == 'true') {
      searchList();
      return;
    }
    // 否则 查询全部
    getLeaderListFun();
  };

  useEffect(() => {
    onChange(+localStorage.getItem('currentPage')!);

    return () => {
      // 如果退出/leader 或者 /leaderInfo 页面，清除
      if (!location.pathname.startsWith('/leader')) {
        // 卸载组件清除数据，避免再次进去出现bug
        localStorage.getItem('currentPage') && localStorage.removeItem('currentPage');

        sessionKey('get', 'isSearching') && sessionKey('del', 'isSearching');
      }
    };
  }, []);

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
