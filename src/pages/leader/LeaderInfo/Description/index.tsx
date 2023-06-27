import React from 'react';
import { Descriptions, Image, Space } from 'antd';
import { DetailInfo } from '@/types/leader';

const LabelItem = ({ label }: { label: string }) => {
  return <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{label}</span>;
};

export default function Description({ detail }: { detail: DetailInfo }) {
  return (
    <Descriptions title="" layout="vertical" bordered size="default">
      <Descriptions.Item label={<LabelItem label="头像" />} style={{ textAlign: 'center', width: '40%' }}>
        <Space size={12}>
          <Image width={150} src={detail.avatar} placeholder={<Image preview={false} src={detail.avatar} />} />
        </Space>
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="联系方式" />} style={{ width: '30%' }}>
        {detail.contact && (
          <div>
            <span style={{ fontWeight: 'bold' }}>Email:</span> {detail.contact}
          </div>
        )}

        {detail.qq && (
          <div>
            <span style={{ fontWeight: 'bold' }}>QQ群:</span> {detail.qq}
          </div>
        )}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="主要研究方向" />}>{detail.rd}</Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="姓名" />} style={{ textAlign: 'center' }}>
        {detail.xm}
      </Descriptions.Item>
      <Descriptions.Item label={<LabelItem label="职称" />} style={{ textAlign: 'center' }}>
        {detail.title}
      </Descriptions.Item>
      <Descriptions.Item label={<LabelItem label="出生年月" />} style={{ textAlign: 'center' }}>
        {detail.birth}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="所在科研团队简介" />} span={3}>
        {detail.teamPro}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="个人主页" />} style={{ textAlign: 'center' }} span={1}>
        {detail.personalHomepage || '暂无'}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="出差" />} style={{ textAlign: 'center' }} span={1}>
        {detail.trip}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="毕业要求" />} style={{ textAlign: 'center' }} span={1}>
        {detail.graduateNeed}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="毕业生成果" />} style={{ textAlign: 'center' }}>
        {detail.graduation || '暂无'}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="科研团队设备" />} style={{ textAlign: 'center' }} span={2}>
        {detail.teamDevice}
      </Descriptions.Item>

      <Descriptions.Item label={<LabelItem label="同意放外出实习需要达到的要求" />} style={{ textAlign: 'center' }}>
        {detail.exercitation || '暂无'}
      </Descriptions.Item>
      <Descriptions.Item label={<LabelItem label="科研团队主要工作" />} span={2}>
        {detail.teamWork}
      </Descriptions.Item>
    </Descriptions>
  );
}
