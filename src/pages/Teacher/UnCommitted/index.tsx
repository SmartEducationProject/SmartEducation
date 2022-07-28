import React from 'react';
import { useQuery } from 'react-query';
import { UnSubmitted } from '../../../api/teacher';
import { Spin } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './index.module.less';
import contact from '../../../assets/teacher/contact.jpg';
import TableComponent from '../Table';
interface DataType {
  name: string;
  class: number;
  stdId: string;
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
    dataIndex: 'stdId',
    key: 'stdId'
  },
  {
    title: '班级',
    dataIndex: 'class',
    key: 'class'
  }
];
const UncommittedPage = () => {
  const { data, isLoading, isError } = useQuery('uncommitted', UnSubmitted);
  if (isLoading) {
    return <Spin />;
  }
  console.log('data', data);

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
        <TableComponent columns={columns} dataSource={data?.data.list} rowKey={'stdId'} />
      </div>
    </div>
  );
};

export default UncommittedPage;
