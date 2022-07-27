import React from 'react';
// import {useQuery} from 'react-query'
// import {UnSubmitted} from '../../../api/api'
import type { ColumnsType } from 'antd/es/table';
import styles from './index.module.less';
import contact from '../../../assets/teacher/contact.jpg';
import TableComponent from '../Table';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '学生',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: '学号',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '班级',
    dataIndex: 'address',
    key: 'address'
  }
];

const datas: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
const UncommittedPage = () => {
  return (
    <div className={styles['uncommitted']}>
      <div className={styles['uncommitted-header']}>
        <div className={styles['header-content']}>
          <div className={styles['header-left']}>
            <span>以下为未提交名单</span>
          </div>
          <div className={styles['header-right']}>
            <img src={contact}></img>
            <span>以Excel表导出数据</span>
          </div>
        </div>
      </div>
      <div className={styles['uncommitted-content']}>
        <TableComponent columns={columns} dataSource={datas} />
      </div>
    </div>
  );
};

export default UncommittedPage;
