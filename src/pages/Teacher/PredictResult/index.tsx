import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Spin, Button, message } from 'antd';
import type { TableProps, ColumnsType } from 'antd/es/table';
import TableComponent from '../Table';
import styles from './index.module.less';
import contact from 'assets/pic/teacher/contact.jpg';
import search from 'assets/pic/teacher/search.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { SubmittedCond, Statistics, Search } from 'api/teacher';
import useDebounceHook from 'utils/useDebounceFn';
import guard from 'router/routeGuard';
import { RightSquareOutlined } from '@ant-design/icons';
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
  stuId: string;
  submitTime: string;
  college: collegeType[];
}

const PredictResult: FunctionComponent = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  /**
   * 此处根据location.pathname来进行路由守卫，防止用户直接跳转到此页面
   * 如果用户直接跳转道老师页面，首先会判断有没有token，如果没有，则会跳转到首页
   */
  useEffect(() => {
    if (guard(pathname) === false) {
      localStorage.clear();
      navigator('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //导出Excel数据的order
  const [order, setOrder] = useState<number>(0);
  //导出Excel数据的排序方式：ascend/descend
  const [orderDirection, setOrderDirection] = useState<number>(0);

  /**
   * @description:将表格所有行进行排序
   * @params {a:DataType,b:DataType}
   * @return  {} 比较结果
   */
  type SortOrder = 'descend' | 'ascend' | null;
  type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
  const sortFunc = useCallback((index: number) => {
    const compare: CompareFn<DataType> = (...args) => {
      //排序方法：升序和降序
      const method = args[2] === 'ascend' ? 1 : 0;
      setOrderDirection(method);
      setOrder(index);
      return (args[0] as DataType).college[index].rate - (args[1] as DataType).college[index].rate;
    };

    return compare;
  }, []);
  /**
   * @description:将表格所有列的className设为null
   * @params {columns} Table的配置项：columns
   * @return  {}
   */
  // const clearClassName = (columns: ColumnsType<DataType>) => {
  //   columns.forEach((item: any) => {
  //     for (const key in item) {
  //       if (key == 'children') {
  //         clearClassName(item[key]);
  //       } else if (key == 'className') {
  //         item['className'] = '';
  //       }
  //     }
  //   });
  // };

  /**
   * @description:点击按钮，点击跳转到未提交学生名单页面
   * @params {}
   * @return  {}
   */

  const uncommittedPage = () => {
    navigator('/teacher/uncommitted');
  };

  /**
   * @description:由于columns中render使用次数较多，故封装一个函数
   * @params {index,key} index代表数组的索引，key代表是返回概率(rate)还是排名(rank)
   * @return  {<span}
   */
  type keyValue = 'rate' | 'rank';
  const renderColumns = useCallback((index: number, key: keyValue) => {
    return (...args: (DataType | number)[]) => {
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
    if (debounceText === '') {
      setTableData(StatisticsData?.data.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceText]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  /**
   * @description:点击搜索按钮，搜索指定学生
   * @params {}
   * @return  {}
   */
  const searchBtn = async () => {
    const result = await Search({ name: searchValue });
    setTableData(result.data.list);
  };

  /**
   * @description:导出Excel表数据
   * @params {}
   * @return  {}
   */

  // const exportExcel = async () => {
  //   const link = document.createElement('a');
  //   link.download = 'aa.xlsx';
  //   link.href = `http://172.20.2.82:8989/teacher/statistics/excel?order=${order + 1}&method=${orderDirection}`;
  //   link.click();
  // };

  const exportExcel = async () => {
    // 获取存储在localStorage中的Token
    const token = localStorage.getItem('token');

    if (!token) {
      // 如果没有Token，可能需要提示用户登录或处理错误
      console.error('Token not found. Please log in.');
      return;
    }

    try {
      const url = `http://172.20.2.82:8989/teacher/statistics/excel?order=${order + 1}&method=${orderDirection}`;

      const urlWithToken = `${url}&token=${token}`;

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
        link.download = 'aa.xlsx';
        link.href = urlWithToken;
        link.click();
      } else {
        message.error('导出失败');
        // 如果后端不同意，处理错误
        console.error('Server rejected the request.');
      }
    } catch (error) {
      message.error('请求失败');
      // 处理请求过程中的任何错误
      console.error('Error during Excel export:', error);
    }
  };

  //table属性列
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
          dataIndex: 'name',
          width: 60,
          render: (...args) => {
            return (
              <span
                onClick={() => {
                  navigator(`/teacher/studentInfo?stuId=${args[1].stuId}`, { state: args[1] });
                }}
                style={{ cursor: 'pointer', display: 'block' }}
              >
                {args[1].name}
              </span>
            );
          }
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
          // render: renderColumns(5, 'rate')
          render: (...args) => {
            return renderColumns(5, 'rate')(...args);
          }
        },
        {
          title: '排名',
          render: (...args) => renderColumns(5, 'rank')(...args)
        },
        {
          title: '专硕概率',
          sorter: sortFunc(4),
          sortDirections: ['ascend', 'descend', 'ascend'],
          render: (...args) => renderColumns(4, 'rate')(...args)
        },
        {
          title: '排名',
          render: (...args) => renderColumns(4, 'rank')(...args)
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
          render: (...args) => renderColumns(1, 'rate')(...args)
        },
        {
          title: '排名',
          render: (...args) => renderColumns(1, 'rank')(...args)
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
          render: (...args) => renderColumns(3, 'rate')(...args)
        },
        {
          title: '排名',
          render: (...args) => renderColumns(3, 'rank')(...args)
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
          render: (...args) => renderColumns(2, 'rate')(...args)
        },
        {
          title: '排名',
          render: (...args) => renderColumns(2, 'rank')(...args)
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
          render: (...args) => renderColumns(0, 'rate')(...args)
        },
        {
          title: '排名',
          render: (...args) => renderColumns(0, 'rank')(...args)
        }
      ]
    },
    {
      title: '提交时间',
      render: (_: unknown, record: { submitTime: string }) => {
        return <span>{record.submitTime.slice(0, 10).split('-').join('/')}</span>;
      }
    }
  ];
  //table的dataSource
  const [tableData, setTableData] = useState<DataType[]>();
  // // scroll={{x:'100%' }}
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  //获取老师端学生提交情况
  const { data, isLoading } = useQuery('submit', SubmittedCond);
  const { total, submitted, unsubmitted } = data?.data || { total: 0, submitted: 0, unsubmitted: 0 };

  //获取老师端考研概率统计情况
  const { data: StatisticsData, isLoading: StatisticsIsLoading } = useQuery('Statistics', Statistics);
  useEffect(() => {
    setTableData(StatisticsData?.data.list);
  }, [StatisticsData]);

  // Table展示loading
  // if (isLoading || StatisticsIsLoading) {
  //   return <Spin />;
  // }

  /**
   * @description:点击前往审批页面
   * @params {null}
   * @return  {null}
   */
  const toApprove = () => {
    navigator('/teacher/approve');
  };

  return (
    <div className={styles['predict']}>
      <div className={styles['predict-header']}>
        <div className={styles['header-content']}>
          <div className={styles['header-left']}>
            <span>
              应提交{total}人，已提交{submitted}人，未提交{unsubmitted}人
            </span>
            <span onClick={() => uncommittedPage()}>查看学生名单</span>
            <div>
              小提示: &nbsp; <span style={{ color: '#fff' }}>点击学生姓名可查看学生相关信息</span>
            </div>
          </div>
          <div className={styles['header-right']}>
            <div className={styles['search']}>
              <input type="text" placeholder="请输入你想搜索的学生姓名" onChange={(e) => inputChange(e)}></input>
              <img src={search} alt="" onClick={() => searchBtn()} />
            </div>
            <div className={styles['header-right-bottom']}>
              <div className={styles['apply']}>
                {localStorage.getItem('authority') == '2' ? (
                  <Button type="primary" shape="round" onClick={toApprove} icon={<RightSquareOutlined />}>
                    前往审批页面
                  </Button>
                ) : null}
              </div>
              <div className={styles['export']}>
                <img src={contact}></img>
                <span onClick={() => exportExcel()}>以Excel表导出数据</span>
              </div>
            </div>
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
            dataSource={tableData}
            onChange={onChange}
            pagination={false}
            loading={isLoading || StatisticsIsLoading}
          />
        </div>
      </div>
    </div>
  );
};
export default PredictResult;
