import React, { Component } from 'react';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import PartHeader from '@/components/PartHeader';
import iconImg from 'assets/pic/student/bar.png';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { ColumnGroupType, ColumnsType } from 'antd/lib/table';
import { usePreviousOtherDetail } from '@/api/student';
import { IPreviousDetailCollege } from '@/types/previous';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useState } from 'react';
import teachers from '@/pages/leader/Leader/teachers';
import { List } from 'echarts';

type selfProps = {
  getCurrent: Function;
};
// interface LeaderProps {
//   year: number;
//   teachers: List;
//   start: number;
//   end: number;
// }
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff'
    }}
  />
);
const onSearch = (value: string) => console.log(value);
const Searchs: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="输入导师相关信息以查找" allowClear enterButton size="large" onSearch={onSearch} />
  </Space>
);

const Paginations: React.FC<selfProps> = (props) => {
  const { getCurrent } = props;
  const [currentpage, setcurrentpage] = useState<number>(1);

  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    setcurrentpage(page);
    getCurrent(page);
    // console.log(page);
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={30} />;
};

const Leader = () => {
  const navigate = useNavigate();
  const { data, isFetching } = usePreviousOtherDetail();
  const [currentpage, setcurrentpage] = useState<number>(1);

  const getCurrentPage = (val: number) => {
    setcurrentpage(val);

    const handleClick = () => {
      console.log(1);
    };
  };
  return (
    <div>
      <div className={styles['detail-container']}>
        {/* <PartHeader title={`我院${year}届学生升学考取外校具体情况`} icon={iconImg} /> */}
        <div className={styles['search-container']}>
          {' '}
          <Searchs></Searchs>
        </div>
        <ul className={styles['teacher-container']}>
          <li id="0" onClick={() => navigate('/leader/leaderInfo')}>
            <img src={teachers[(currentpage - 1) * 8].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8].redirection}</div>
          </li>
          <li id="1" onClick={(e) => console.log(e)}>
            <img src={teachers[(currentpage - 1) * 8 + 1].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 1].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 1].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 1].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 2].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 2].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 2].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 2].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 3].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 3].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 3].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 3].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 4].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 4].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 4].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 4].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 5].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 5].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 5].title}</div>
            <div className={styles['redirection']}>{teachers[currentpage + 5].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 6].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 6].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 6].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 6].redirection}</div>
          </li>
          <li>
            <img src={teachers[(currentpage - 1) * 8 + 7].path} alt="" />
            <div className={styles['name']}>{teachers[(currentpage - 1) * 8 + 7].name}</div>
            <div className={styles['title']}>{teachers[(currentpage - 1) * 8 + 7].title}</div>
            <div className={styles['redirection']}>{teachers[(currentpage - 1) * 8 + 7].redirection}</div>
          </li>
        </ul>
        {/* <ul className={styles['teacher-container']}>
          {teachers.map(item => <li>
            <img src="#" alt="" />
            <div className={styles['name']}>{item.name}</div>
            <div className={styles['title']}>{item.title}</div>
            <div className={styles['redirection']}>{item.redirection}</div>
          </li>)}
        </ul> */}
        <div className={styles['pagination-container']}>
          {' '}
          <Paginations getCurrent={getCurrentPage}></Paginations>
        </div>
      </div>
    </div>
  );
};

export default Leader;
