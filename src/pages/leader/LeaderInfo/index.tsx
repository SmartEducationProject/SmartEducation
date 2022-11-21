import React, { Component } from 'react';
import styles from './index.module.less';
import { Badge, Descriptions } from 'antd';
import img from 'assets/pic/leader/1.jpg';
const Description: React.FC = () => (
  <Descriptions title="" layout="vertical" bordered size="default">
    <Descriptions.Item label="">
      <img src={img} className={styles['img-container']}></img>
    </Descriptions.Item>
    <Descriptions.Item label="联系方式">chenqs@cqupt.edu.cn</Descriptions.Item>
    <Descriptions.Item label="主要研究方向">图像处理、大数据分析和区块链技术</Descriptions.Item>
    <Descriptions.Item label="姓名">陈乔松</Descriptions.Item>
    <Descriptions.Item label="职称">副教授</Descriptions.Item>
    <Descriptions.Item label="出生年月">1978.10</Descriptions.Item>
    <Descriptions.Item label="所在科研团队简介" span={3}>
      数据工程与可视计算创新团队依托重庆邮电大学计算机科学与技术学院/人工智能学院，致力于在大数据、自然语言处理、推荐系统、可视计算等领域开展基础理论与应用技术研究。团队创建于2012年，2017年获得重庆市教学成果一等奖，2018年与金窝窝网络科技有限公司联合成立重邮-金窝窝区块链与大数据联合实验室，2019年建成重庆邮电大学互联网生态研究中心,2020年获重庆市科技进步奖二等奖2项。
      实验室现有固定成员12人，其中教授2人，副教授4人，讲师6人，近
      60%固定成员在国外获得博士学位，硕士研究生100余人。实验室服务大数据、人工智能等国家重大战略需求，紧密对接成渝地区双城经济圈建设和产业转型升级，培养适应和引领新一轮科技革命和产业变革挑战，能够把自身价值实现与国家发展紧密联系，具备家国情怀的卓越工程科技人才。近3年来，实验室培养的硕士研究生50%以上就职于阿里巴巴、腾讯、百度、字节跳动、华为等企业的数据挖掘、机器学习、推荐算法工程师岗位。
    </Descriptions.Item>
    <Descriptions.Item label="同意放外出实习需要达到的要求"> 研二下学期鼓励研究生到行业企业进行3-6个月实习。</Descriptions.Item>
    <Descriptions.Item label="科研团队主要工作" span={2}>
      团队根据人才培养个性化需要，提供参与图像、大数据和区块链领域的应用基础研究、产学合作项目机会，同时鼓励研究生参与以真实场景和实际数据为基础的算法类学科竞赛。
    </Descriptions.Item>
  </Descriptions>
);

export default function LeaderInfo() {
  return (
    <div>
      <div className={styles['detail-container']}>
        <div className={styles['des-container']}>
          {' '}
          <Description></Description>
        </div>
      </div>
    </div>
  );
}
