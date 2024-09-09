import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { UnSubmitted } from 'api/teacher';
import { Spin, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './index.module.less';
import contact from 'assets/pic/teacher/contact.jpg';
import TableComponent from '../Table';
import { useLocation, useNavigate } from 'react-router-dom';
import guard from 'router/routeGuard';

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
    width: 200,
    align: 'center',
    render: (text) => <a>{text}</a>
  },
  {
    title: '学号',
    dataIndex: 'stdId',
    key: 'stdId',
    width: 200,
    align: 'center'
  },
  {
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    width: 200,
    align: 'center'
  }
];
const UncommittedPage = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (guard(pathname) === false) {
      localStorage.clear();
      navigator('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data, isLoading } = useQuery('uncommitted', UnSubmitted);
  if (isLoading) {
    return <Spin />;
  }
  /**
   * @description:将未提交学生名单导出Excel
   * @params {data} 未提交学生名单
   */
  // const exportUncommitted = () => {
  //   const link = document.createElement('a');
  //   link.download = '未提交学生名单.xlsx';
  //   link.href = 'http://172.20.2.82:8989/teacher/unsubmitted/excel';
  //   link.click();
  // };
  const exportUncommitted = async () => {
    // 获取存储在localStorage中的Token
    const token = localStorage.getItem('token');

    if (!token) {
      // 如果没有Token，可能需要提示用户登录或处理错误
      console.error('Token not found. Please log in.');
      return;
    }

    try {
      const baseUrl = 'http://172.20.2.82:8989/teacher/unsubmitted/excel';

      const urlWithToken = `${baseUrl}/?token=${token}`;

      // 发送请求到后端以获取授权
      const response = await fetch(urlWithToken, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // 检查后端是否同意请求
      if (response.ok) {
        message.loading('正在导出数据');
        // 创建一个用于下载的链接
        const link = document.createElement('a');
        link.download = '未提交学生名单.xlsx';
        link.href = urlWithToken;
        link.click();
      } else {
        message.error('导出失败');
        // 如果后端不同意，处理错误
        console.error('Server rejected the request.');
        console.log('response', response);
      }
    } catch (error) {
      message.error('请求失败');
      // 处理请求过程中的任何错误
      console.error('Error during Excel export:', error);
    }
  };

  return (
    <div className={styles['uncommitted']}>
      <div className={styles['uncommitted-header']}>
        <div className={styles['header-content']}>
          <div className={styles['header-left']}>
            <span>以下为未提交名单</span>
          </div>
          <div className={styles['header-right']}>
            <img src={contact}></img>
            <span onClick={() => exportUncommitted()}>以Excel表导出数据</span>
          </div>
        </div>
      </div>
      <div className={styles['uncommitted-content']}>
        <TableComponent columns={columns} dataSource={data?.data.list} rowKey={'stdId'} pagination={false} />
      </div>
    </div>
  );
};

export default UncommittedPage;
