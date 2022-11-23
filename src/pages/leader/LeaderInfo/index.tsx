import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.less';
import { Descriptions } from 'antd';
import { addLeaderPv, getLeaderDetail } from '@/api/leader';
import { DetailInfo } from '@/types/leader';
import Loading from '@/components/Loading';

const Description = ({ detail }: { detail: DetailInfo }) => (
  <Descriptions title="" layout="vertical" bordered size="default">
    <Descriptions.Item label="头像" style={{ textAlign: 'center' }}>
      <img src={detail.avatar} className={styles['img-container']}></img>
    </Descriptions.Item>

    <Descriptions.Item label="联系方式">
      <div>Email: </div>
      <div>{detail.contact}</div>
      <div>QQ: </div>
      <div>{detail.qq}</div>
    </Descriptions.Item>

    <Descriptions.Item label="主要研究方向">{detail.rd}</Descriptions.Item>

    <Descriptions.Item label="姓名" style={{ textAlign: 'center' }}>
      {detail.xm}
    </Descriptions.Item>
    <Descriptions.Item label="职称" style={{ textAlign: 'center' }}>
      {' '}
      {detail.title}
    </Descriptions.Item>
    <Descriptions.Item label="出生年月" style={{ textAlign: 'center' }}>
      {detail.birth}
    </Descriptions.Item>

    <Descriptions.Item label="所在科研团队简介" span={3}>
      {detail.teamPro}
    </Descriptions.Item>

    <Descriptions.Item label="毕业生成果"> {detail.graduation}</Descriptions.Item>
    <Descriptions.Item label="科研团队设备" span={2}>
      {detail.teamDevice}
    </Descriptions.Item>

    <Descriptions.Item label="同意放外出实习需要达到的要求" style={{ textAlign: 'center' }}>
      {' '}
      {detail.exercitation}
    </Descriptions.Item>
    <Descriptions.Item label="科研团队主要工作" span={2}>
      {detail.teamWork}
    </Descriptions.Item>
  </Descriptions>
);

export default function LeaderInfo() {
  const location = useLocation();

  let sfrzm: string = location.state;

  let [detail, setDetail] = useState<DetailInfo>();

  let timer: any = null;

  function addPv() {
    timer = setTimeout(() => {
      console.log('发起请求');
    }, 5000);
  }

  async function getDetial() {
    let result: DetailInfo = await getLeaderDetail({ sfrzm });
    setDetail(result);
  }

  useEffect(() => {
    addPv();
    return () => {
      console.log('不发起请求');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    getDetial();
  }, []);

  return (
    <div className={styles['detail-container']}>
      <div className={styles['des-container']}>
        {!detail && <Loading />}
        {detail && <Description detail={detail!}></Description>}
      </div>
    </div>
  );
}
