import React from 'react';
import { EyeFilled } from '@ant-design/icons';
interface propsType {
  pv: number;
}
export default function ViewCount(props: propsType) {
  let { pv } = props;
  return (
    <>
      {' '}
      <EyeFilled /> <div style={{ marginRight: '10px' }}>{pv}</div>{' '}
    </>
  );
}
