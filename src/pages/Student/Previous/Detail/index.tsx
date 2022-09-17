import React from 'react';
import styles from './index.module.less';
import PartHeader from '@/components/PartHeader';
import iconImg from 'assets/pic/student/bar.png';
import { Table } from 'antd';
import { ColumnGroupType, ColumnsType } from 'antd/lib/table';
import { usePreviousOtherDetail } from '@/api/student';
import { IPreviousDetailCollege } from '@/types/previous';

interface DetailProps {
  year: number;
}

const getCountAndRate = (path: string[], config?: { countTitle?: string; rateTitle?: string }): ColumnGroupType<IPreviousDetailCollege>['children'] => [
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

const columns: ColumnsType<IPreviousDetailCollege> = [
  {
    title: '报考学校(报名人数≥3人)',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '具体情况',
    children: [
      {
        title: '报考人数',
        align: 'center',
        dataIndex: ['preliminary', 'count']
      },
      {
        title: '上线',
        children: getCountAndRate(['preliminarySuccess'], { countTitle: '人数', rateTitle: '上线率' })
      },
      {
        title: '录取',
        children: getCountAndRate(['admit'], { rateTitle: '录取率' })
      }
    ]
  }
];

const Detail = ({ year }: DetailProps) => {
  const { data, isFetching } = usePreviousOtherDetail();

  const summary = data && (
    <Table.Summary.Row>
      <Table.Summary.Cell align="center" index={0}>
        总计
      </Table.Summary.Cell>
      <Table.Summary.Cell align="center" index={1}>
        {data.total.preliminary.count}
      </Table.Summary.Cell>
      <Table.Summary.Cell align="center" index={2}>
        {data.total.preliminarySuccess.count}
      </Table.Summary.Cell>
      <Table.Summary.Cell align="center" index={3}>
        {(data.total.preliminarySuccess.rate * 100).toFixed(2) + '%'}
      </Table.Summary.Cell>
      <Table.Summary.Cell align="center" index={4}>
        {data.total.admit.count}
      </Table.Summary.Cell>
      <Table.Summary.Cell align="center" index={5}>
        {(data.total.admit.rate * 100).toFixed(2) + '%'}
      </Table.Summary.Cell>
    </Table.Summary.Row>
  );

  return (
    <div>
      <div className={styles['detail-container']}>
        <PartHeader title={`我院${year}届学生升学考取外校具体情况`} icon={iconImg} />
        <main>
          <Table
            loading={isFetching}
            columns={columns}
            dataSource={data?.colleges}
            pagination={false}
            className={styles['table-container']}
            rowKey={(record) => record.id}
            bordered
            summary={() => summary}
          />
        </main>
      </div>
    </div>
  );
};

export default Detail;
