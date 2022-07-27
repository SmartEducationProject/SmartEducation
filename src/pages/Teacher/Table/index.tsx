import React from 'react';
import { Table, TableProps } from 'antd';
import styles from './index.module.less';

const TableComponent = (props: JSX.IntrinsicAttributes & TableProps<any> & { children?: React.ReactNode } & { ref?: React.Ref<HTMLDivElement> | undefined }) => {
  return <Table {...props}></Table>;
};

export default TableComponent;
