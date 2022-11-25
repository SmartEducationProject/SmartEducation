import React, { useEffect, useRef } from 'react';
import { EyeFilled } from '@ant-design/icons';
import { CountUp } from 'countup.js';

interface propsType {
  pv: number;
}
export default function ViewCount(props: propsType) {
  let { pv } = props;
  let pvRef = useRef(null);

  const startCount = () => {
    new CountUp(pvRef.current! as HTMLElement, Math.random() * 10000, { duration: 0.5 }).start();
  };

  useEffect(() => {
    startCount();
  }, []);
  return (
    <>
      <EyeFilled /> <div style={{ marginRight: '10px' }} ref={pvRef}></div>
    </>
  );
}
