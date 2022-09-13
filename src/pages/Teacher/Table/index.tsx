import React from 'react';
import { Table, TableProps } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TdCell = (props: any) => {
  // onMouseEnter, onMouseLeave在数据量多的时候，会严重阻塞表格单元格渲染，严重影响性能
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onMouseEnter, onMouseLeave, ...restProps } = props;
  return <td {...restProps} />;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableComponent = (props: JSX.IntrinsicAttributes & TableProps<any> & { children?: React.ReactNode } & { ref?: React.Ref<HTMLDivElement> | undefined }) => {
  return (
    <Table
      {...props}
      components={{
        body: { cell: TdCell }
      }}
    ></Table>
  );
};

export default TableComponent;
