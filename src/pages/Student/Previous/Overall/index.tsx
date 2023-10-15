import React from 'react';
import styles from './index.module.less';
import PartHeader from '@/components/PartHeader';
import iconImg from 'assets/pic/student/bar.png';
import { Table } from 'antd';
import { ColumnGroupType, ColumnsType } from 'antd/lib/table';
import { IPreviousOverall } from '@/types/previous';
import { usePreviousOverall } from '@/api/student';

interface OverallProps {
  year: number;
}

const getCountAndRate = (path: string[], config?: { countTitle?: string; rateTitle?: string }): ColumnGroupType<IPreviousOverall>['children'] => [
  {
    title: config?.countTitle || '人数',
    dataIndex: [...path, 'count'],
    align: 'center'
  },
  {
    title: config?.rateTitle || '比例',
    dataIndex: [...path, 'rate'],
    align: 'center',
    render: (record: number) => {
      return <span>{(record * 100).toFixed(2) + '%'}</span>;
    }
  }
];

const columns: ColumnsType<IPreviousOverall> = [
  {
    title: '毕业',
    dataIndex: 'graduatesCount',
    align: 'center',
    fixed: 'left'
  },
  {
    title: '保研',
    children: getCountAndRate(['postgraduateRecommendation'])
  },
  {
    title: '本校',
    dataIndex: 'cqupt',
    children: [
      {
        title: '专硕(327)',
        children: [
          {
            title: '报考人数',
            align: 'center',
            dataIndex: ['cqupt', 'professional', 'preliminary', 'count']
          },
          {
            title: '上线',
            children: getCountAndRate(['cqupt', 'professional', 'preliminarySuccess'], { rateTitle: '上线率' })
          },
          {
            title: '录取',
            children: getCountAndRate(['cqupt', 'professional', 'admit'], { rateTitle: '录取率' })
          }
        ]
      },
      {
        title: '学硕(311)',
        children: [
          {
            title: '报考人数',
            align: 'center',
            dataIndex: ['cqupt', 'academic', 'preliminary', 'count']
          },
          {
            title: '上线',
            children: getCountAndRate(['cqupt', 'academic', 'preliminarySuccess'], { rateTitle: '上线率' })
          },
          {
            title: '录取',
            children: getCountAndRate(['cqupt', 'academic', 'admit'], { rateTitle: '录取率' })
          }
        ]
      },
      {
        title: '录取(合计)',
        children: getCountAndRate(['cqupt', 'total', 'admit'], { rateTitle: '录取率' })
      }
    ]
  },
  {
    title: '外校',
    dataIndex: 'cqupt',
    children: [
      {
        title: '报考人数',
        align: 'center',
        dataIndex: ['other', 'preliminary', 'count']
      },
      {
        title: '上线',
        children: getCountAndRate(['other', 'preliminarySuccess'], { rateTitle: '上线率' })
      },
      {
        title: '录取',
        children: getCountAndRate(['other', 'admit'], { rateTitle: '录取率' })
      }
    ]
  }
];

const Overall = ({ year }: OverallProps) => {
  const { data, isFetching } = usePreviousOverall();

  return (
    <div className={styles['overall-container']}>
      <PartHeader title={`我院${year}届学生升学总体情况`} icon={iconImg} />
      <main>
        <Table
          loading={isFetching}
          columns={columns}
          dataSource={[data as IPreviousOverall]}
          pagination={false}
          className={styles['table']}
          rowKey={() => '2023'}
          bordered
          size="middle"
          scroll={{ x: 1600 }}
        />
      </main>
    </div>
  );
};

export default Overall;
