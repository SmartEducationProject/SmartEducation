import React, { Children, FunctionComponent, useCallback } from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import TableComponent from '../Table';
import styles from './index.module.less';
import contact from '../../../assets/teacher/contact.jpg';
import search from '../../../assets/teacher/search.png';
import { useNavigate } from 'react-router-dom';
const PredictResult: FunctionComponent = () => {
  interface DataType {
    key: React.Key;
    num: number;
    name: string;
    college: string;
    classId: string;
    cyxueshuo: string;
    cypaiming: string;
    cyzhuanshuo: string;
    cyzhuanpaiming: string;
    dianzixueshuo: string;
    dianzipaiming: string;
    cdxueshuo: string;
    cdpaiming: string;
    xaxueshuo: string;
    xapaiming: string;
    byxueshuo: string;
    bypaiming: string;
    time: string;
  }
  /**
   * @description:将表格所有行进行排序
   * @params {a:DataType,b:DataType}
   * @return  {} 比较结果
   */
  type SortOrder = 'descend' | 'ascend' | null;
  type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
  const sortFunc = useCallback((key: string) => {
    const compare: CompareFn<DataType> = (...args) => {
      return parseInt((args[0] as DataType).dianzixueshuo) - parseInt((args[1] as DataType).dianzixueshuo);
    };
    return compare;
  }, []);
  /**
   * @description:将表格所有列的className设为null
   * @params {columns} Table的配置项：columns
   * @return  {}
   */
  const clearClassName = (columns: ColumnsType<DataType>) => {
    columns.forEach((item: any) => {
      for (const key in item) {
        if (key == 'children') {
          clearClassName(item[key]);
        } else if (key == 'className') {
          item['className'] = '';
        }
      }
    });
  };

  /**
   * @description:点击按钮，点击跳转到未提交学生名单页面
   * @params {}
   * @return  {}
   */
  const navigate = useNavigate();
  const uncommittedPage = () => {
    navigate('/teacher/uncommitted');
  };

  const columns: ColumnsType<DataType> = [
    {
      key: 'num',
      title: '序号',
      dataIndex: 'num',
      width: 100,
      // className: styles['colums'],
      sorter: (a, b) => a.num - b.num,
      sortDirections: ['ascend', 'descend']
    },
    {
      title: '学生信息',
      key: 'stu-information',
      children: [
        {
          title: '姓名',
          width: 150,
          dataIndex: 'name'
        },
        {
          title: '学号',
          width: 150,
          dataIndex: 'college'
        },
        {
          title: '班级',
          width: 150,
          dataIndex: 'classId'
        }
      ]
    },
    {
      title: '重庆邮电大学',
      // dataIndex: 'cqupt',
      children: [
        {
          title: '学硕概率',
          sorter: sortFunc('cyxueshuo'),
          dataIndex: 'cyxueshuo'
        },
        {
          title: '排名',
          dataIndex: 'cypaiming'
        },
        {
          title: '专硕概率',
          sorter: sortFunc('cyzhuanshuo'),
          dataIndex: 'cyzhuanshuo'
        },
        {
          title: '排名',
          dataIndex: 'cyzhuanpaiming'
        }
      ]
    },
    {
      title: '电子科技大学',
      sorter: sortFunc('dianzikeda'),
      children: [
        {
          title: '概率',
          // className:styles['colums'],
          className: '',

          dataIndex: 'dianzixueshuo'
        },
        {
          title: '排名',
          dataIndex: 'dianzipaiming'
        }
      ]
    },
    {
      title: '重庆大学',
      // dataIndex: 'chongda',
      sorter: sortFunc('chongda'),
      children: [
        {
          title: '概率',
          dataIndex: 'cdxueshuo'
        },
        {
          title: '排名',
          dataIndex: 'cdpaiming'
        }
      ]
    },
    {
      title: '西安电子科技大学',
      // dataIndex: 'xidian',
      sorter: sortFunc('xidian'),
      children: [
        {
          title: '概率',
          dataIndex: 'xaxueshuo'
        },
        {
          title: '排名',
          dataIndex: 'xapaiming'
        }
      ]
    },
    {
      title: '北京邮电大学',
      // dataIndex: 'beiyou',
      sorter: sortFunc('beiyou'),
      children: [
        {
          title: '概率',
          dataIndex: 'byxueshuo'
        },
        {
          title: '排名',
          dataIndex: 'bypaiming'
        }
      ]
    },
    {
      title: '提交时间',
      dataIndex: 'time'
    }
  ];

  const data = [
    {
      key: '1',
      num: 1,
      name: 'tom',
      college: '2020211327',
      classId: '04052001',
      cyxueshuo: '78.00%',
      cypaiming: '1/200',
      cyzhuanshuo: '89.00%',
      cyzhuanpaiming: '1/200',
      dianzixueshuo: '56.00%',
      dianzipaiming: '45/200',
      cdxueshuo: '12.00%',
      cdpaiming: '67/100',
      xaxueshuo: '78.00%',
      xapaiming: '234/240',
      byxueshuo: '15.00%',
      bypaiming: '56/200',
      time: '200/2/2'
    },
    {
      key: '2',
      num: 2,
      name: 'tom',
      college: '2020211327',
      classId: '04052001',
      cyxueshuo: '78.00%',
      cypaiming: '1/200',
      cyzhuanshuo: '89.00%',
      cyzhuanpaiming: '1/200',
      dianzixueshuo: '56.00%',
      dianzipaiming: '45/200',
      cdxueshuo: '12.00%',
      cdpaiming: '67/100',
      xaxueshuo: '78.00%',
      xapaiming: '234/240',
      byxueshuo: '15.00%',
      bypaiming: '56/200',
      time: '200/2/2'
    }
  ];

  // // scroll={{x:'100%' }}
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div className={styles['predict']}>
      <div className={styles['predict-header']}>
        <div className={styles['header-content']}>
          <div className={styles['header-left']}>
            <span>应提交xx人，已提交xx人，未提交xx人</span>
            <span onClick={() => uncommittedPage()}>查看学生名单</span>
          </div>
          <div className={styles['header-right']}>
            <div className={styles['search']}>
              <input type="text" placeholder="请输入你想搜索的学生姓名"></input>
              <img src={search} alt="" />
            </div>
            <img src={contact}></img>
            <span>以Excel表导出数据</span>
          </div>
        </div>
      </div>
      <div className={styles['predict-content']}>
        <div className={styles['predict-table']}>
          <TableComponent
            size="small"
            locale={{
              cancelSort: '',
              triggerAsc: '',
              triggerDesc: ''
            }}
            rowClassName={styles['table-rowClass']}
            className={styles['table-class']}
            bordered
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default PredictResult;
