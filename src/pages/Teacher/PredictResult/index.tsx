import React, { Children, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Spin, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import TableComponent from '../Table';
import styles from './index.module.less';
import contact from '../../../assets/teacher/contact.jpg';
import search from '../../../assets/teacher/search.png';
import { useNavigate } from 'react-router-dom';
// import useDebounceFn from '@/utils/useDebounceFn';
// import { useQuery } from '@tanstack/react-query';
import { useQuery } from 'react-query';
import { SubmittedCond, Statistics, Search } from '../../../api/teacher';
import useDebounceHook from '@/utils/useDebounceFn';
const PredictResult: FunctionComponent = () => {
  interface collegeType {
    name: string;
    id: number;
    rank: number;
    rate: number;
  }
  interface DataType {
    key: React.Key;
    id: number;
    class: string;
    name: string;
    stdId: string;
    submitTime: string;
    college: collegeType[];
  }
  /**
   * @description:将表格所有行进行排序
   * @params {a:DataType,b:DataType}
   * @return  {} 比较结果
   */
  type SortOrder = 'descend' | 'ascend' | null;
  type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
  const sortFunc = useCallback((index: number) => {
    const compare: CompareFn<DataType> = (...args) => {
      return (args[0] as DataType).college[index].rate - (args[1] as DataType).college[index].rate;
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

  /**
   * @description:由于columns中render使用次数较多，故封装一个函数
   * @params {index,key} index代表数组的索引，key代表是返回概率(rate)还是排名(rank)
   * @return  {<span}
   */
  type keyValue = 'rate' | 'rank';
  const renderColumns = useCallback((index: number, key: keyValue) => {
    return (...args: any) => {
      if (key === 'rate') {
        return <span>{(Number((args[1] as DataType).college[index].rate.toFixed(7)) * 100).toFixed(2) + '%'}</span>;
      } else {
        return <span>{(args[1] as DataType).college[index].rank}</span>;
      }
    };
  }, []);

  /**
   *  @description:对input的输入进行消抖处理
   *
   */
  const [searchValue, setSearchValue] = useState<string | null>('');
  const debounceText = useDebounceHook(searchValue, 1000);
  useEffect(() => {
    // ...
    console.info('change', debounceText);
  }, [debounceText]);

  const inputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  /**
   * @description:点击搜索按钮，搜索指定学生
   * @params {}
   * @return  {}
   */
  const searchBtn = async () => {
    let result = await Search({ name: searchValue });
    console.log('result', result);
  };

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: '序号',
      dataIndex: 'id'
    },
    {
      title: '学生信息',
      key: 'stu-information',
      children: [
        {
          title: '姓名',
          dataIndex: 'name'
        },
        {
          title: '学号',
          dataIndex: 'stuId'
        },
        {
          title: '班级',
          dataIndex: 'class'
        }
      ]
    },
    {
      title: '重庆邮电大学',
      children: [
        {
          title: '学硕概率',
          sorter: sortFunc(5),
          sortDirections: ['ascend', 'descend', 'ascend'],
          render: renderColumns(5, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(5, 'rank')
        },
        {
          title: '专硕概率',
          sorter: sortFunc(4),
          sortDirections: ['ascend', 'descend', 'ascend'],
          render: renderColumns(4, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(4, 'rank')
        }
      ]
    },
    {
      title: '电子科技大学',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: sortFunc(1),
      children: [
        {
          title: '概率',
          className: '',
          render: renderColumns(1, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(1, 'rank')
        }
      ]
    },
    {
      title: '重庆大学',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: sortFunc(3),
      children: [
        {
          title: '概率',
          render: renderColumns(3, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(3, 'rank')
        }
      ]
    },
    {
      title: '西安电子科技大学',
      sorter: sortFunc(2),
      sortDirections: ['ascend', 'descend', 'ascend'],
      children: [
        {
          title: '概率',
          render: renderColumns(2, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(2, 'rank')
        }
      ]
    },
    {
      title: '北京邮电大学',
      sorter: sortFunc(0),
      sortDirections: ['ascend', 'descend', 'ascend'],
      children: [
        {
          title: '概率',
          render: renderColumns(0, 'rate')
        },
        {
          title: '排名',
          render: renderColumns(0, 'rank')
        }
      ]
    },
    {
      title: '提交时间',
      render: (_, record) => {
        return <span>{record.submitTime.slice(0, 10).split('-').join('/')}</span>;
      }
    }
  ];
  // // scroll={{x:'100%' }}
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  //获取老师端学生提交情况
  const { data, isLoading, isError } = useQuery('submit', SubmittedCond);
  const { total, submitted, unsubmitted } = data?.data || { total: 0, submitted: 0, unsubmitted: 0 };

  //获取老师端考研概率统计情况
  const { data: StatisticsData, isLoading: StatisticsIsLoading } = useQuery('Statistics', Statistics);
  if (isLoading || StatisticsIsLoading) {
    return <Spin />;
  }
  return (
    <div className={styles['predict']}>
      <div className={styles['predict-header']}>
        <div className={styles['header-content']}>
          <div className={styles['header-left']}>
            <span>
              应提交{total}人，已提交{submitted}人，未提交{unsubmitted}人
            </span>
            <span onClick={() => uncommittedPage()}>查看学生名单</span>
          </div>
          <div className={styles['header-right']}>
            <div className={styles['search']}>
              <input type="text" placeholder="请输入你想搜索的学生姓名" onChange={(e) => inputChange(e)}></input>
              <img src={search} alt="" onClick={() => searchBtn()} />
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
            rowKey={'id'}
            dataSource={StatisticsData?.data.list}
            onChange={onChange}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};
export default PredictResult;
