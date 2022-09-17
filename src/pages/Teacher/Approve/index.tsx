import { getAllApply, isAgreeApply } from '@/api/teacher';
import { isAgreeType } from '@/types/Request';
import { Button, message, Popconfirm, Spin } from 'antd';
import React, { FunctionComponent } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import TableComponent from '../Table';
import styles from './index.module.less';
const Approve: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery('appApply', getAllApply);
  const mutation = useMutation((record: isAgreeType) => isAgreeApply(record), {
    onSuccess: (data) => {
      data.info == 'success' ? message.success('审批成功') : message.error('审批失败');
      queryClient.invalidateQueries('appApply');
    }
  });
  interface RecordType {
    description: string;
    sfrzh: string;
    state: number;
    xm: string;
  }
  //气泡确认框
  const confirm = async (record: RecordType, state: number) => {
    mutation.mutate({ sfrzh: record.sfrzh, isAgree: state });
  };

  const cancel = (e: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
    console.log(e);
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'xm',
      key: 'xm'
    },
    {
      title: '身份认证码',
      dataIndex: 'sfrzh',
      key: 'sfrzh'
    },
    {
      title: '申请理由',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: RecordType, record: RecordType) => (
        <div>
          <Popconfirm
            title="确定同意该申请吗？"
            okText="确定"
            cancelText="取消"
            // open={true}
            onConfirm={() => confirm(record, 1)}
            onCancel={cancel}
          >
            <Button type="primary" style={{ marginRight: '10px' }}>
              同意
            </Button>
          </Popconfirm>
          <Popconfirm title="确定拒绝该申请吗？" okText="确定" cancelText="取消" onConfirm={() => confirm(record, 0)} onCancel={cancel}>
            <Button danger>拒绝</Button>
          </Popconfirm>
        </div>
      )
    }
  ];
  if (isLoading) {
    return <Spin />;
  }
  return (
    <div className={styles['approve']}>
      <TableComponent rowKey={'sfrzh'} dataSource={data?.data.teacherList} pagination={false} columns={columns} />
    </div>
  );
};
export default Approve;
