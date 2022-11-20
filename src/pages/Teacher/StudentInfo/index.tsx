import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '@/components/Loading';
import { useStudentInfo, infoType } from '@/api/teacher';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import styles from './index.module.less';

interface DataType {
  key: React.Key;
  reason: string;
  option: string;
  value: string;
}
interface optionType<T> {
  [k: keyof infoType]: T;
}

export default function studentInfo() {
  const loaction = useLocation();
  let stuId: number = parseInt(loaction.search?.split('=')[1]);

  let [tableData, setTableData] = useState<DataType[]>();
  let { data, isFetching } = useStudentInfo(stuId);

  console.log('data', data);
  console.log('isFetching', isFetching);

  // 模拟后端返回的数据
  // let info : infoType  = {
  //     "xh": "2019211011",
  //     "sfrzh": "1664728",
  //     "solo": 1.0,
  //     "familySupport": 2.0,
  //     "startTime": 5.0,
  //     "dailyStartTime": 5.0,
  //     "dailyEndTime": 1.0,
  //     "place": 4.0,
  //     "mathStartTime": 5.0,
  //     "linearAlgebra": 5.0,
  //     "probabilityTheory": 5.0,
  //     "mathFirstRoundTime": 4.0,
  //     "mathSecondRoundTime": 1.0,
  //     "englishStartTime": 5.0,
  //     "englishWordNum": 1.0,
  //     "politicsStartTime": 5.0,
  //     "specializedCoursesStartTime": 5.0,
  //     "computerNetworks": 5.0,
  //     "operatingSystems": 5.0,
  //     "computerComposition": 5.0,
  //     "tangjiafeng": 0.0,
  //     "zhangyu": 0.0,
  //     "wuzhongxiang": 0.0,
  //     "liyongle": 0.0,
  //     "lilin": 0.0,
  //     "yubinsen": 0.0,
  //     "yangchao": 0.0,
  //     "wu": 0.0,
  //     "linearTangjiafeng": 0.0,
  //     "linearZhangyu": 0.0,
  //     "linearWuzhongxiang": 0.0,
  //     "linearLiyongle": 0.0,
  //     "linearLilin": 0.0,
  //     "linearYubinsen": 0.0,
  //     "linearYangchao": 0.0,
  //     "linearWu": 0.0,
  //     "probabilityTangjiafeng": 0.0,
  //     "probabilityZhangyu": 0.0,
  //     "probabilityWuzhongxiang": 0.0,
  //     "probabilityLiyongle": 0.0,
  //     "probabilityLilin": 0.0,
  //     "probabilityYubinsen": 0.0,
  //     "probabilityYangchao": 0.0,
  //     "probabilityWu": 0.0,
  //     "englishHekaiwen": 0.0,
  //     "englishWangjiangtao": 0.0,
  //     "englishZhuwei": 0.0,
  //     "englishTangchi": 0.0,
  //     "englishTangjing": 0.0,
  //     "englishTianjing": 0.0,
  //     "englishLiuxiaoyan": 0.0,
  //     "englishOther": 0.0,
  //     "politicsXiaoxiurong": 0.0,
  //     "politicsTuijie": 0.0,
  //     "politicsXutao": 0.0,
  //     "politicsOther": 0.0,
  //     "noonTime": 4.0,
  //     "exerciseTime": 1.0,
  //     "motivation": 3.0
  // }

  // 可供选择
  let options: optionType<string[]> = {
    motivation: ['考研动机', '提高学历，有利于更好就业', '获得更多知识，提高自身文化修养', '留恋校园生活', '其他'],
    solo: ['是否独自备战', '自己一个人备考', '与同学或者研友一起备考'],
    startTime: ['考研准备时间', '3月之前', '3月-4月', '5月-6月', '7月-8月', '9月及以后'],
    dailyStartTime: ['每天开始学习的时间', '8:00以前', '8:00-8:59', '9:00-9:59', '10:00-10:59', '11:00以后'],
    dailyEndTime: ['每天结束学习的时间', '18:00以前', '18:00-19:59', '20:00-21:59', '22:00以后'],
    place: ['主要备考场所', '老图', '数字图书馆', '教学楼', '寝室', '外出租房'],
    mathStartTime: ['数学开始备考时间', '3月之前', '3月-4月', '5月-6月', '7月-8月', '9月及以后', '无'],
    mathFirstRoundTime: ['数学一轮复习完成时间', '6月以前', '6月', '7月-8月', '9月及以后'],
    mathSecondRoundTime: ['数学二轮复习完成时间', '7月-8月', '9月-10月', '11月及以后'],
    englishStartTime: ['英语开始备考时间', '3月以前', '3月-4月', '5月-6月', '7月-8月', '9月及以后'],
    englishWordNum: ['每日学习英语单词数量', '20-50个', '50-100个', '100-200个', '200个以上'],
    politicsStartTime: ['政治开始备考时间', '5月以前', '5月-6月', '7月-8月', '9月-10月', '11月及以后'],
    specializedCoursesStartTime: ['数据结构开始备考时间', '5月之前', '5月-6月', '7月-8月', '9月-10月', '11月及以后', '无'],
    computerNetworks: ['计算机网络开始备考时间', '5月之前', '5月-6月', '7月-8月', '9月-10月', '11月及以后', '无'],
    operatingSystems: ['操作系统开始备考时间', '5月之前', '5月-6月', '7月-8月', '9月-10月', '11月及以后', '无'],
    computerComposition: ['计算机组成开始备考时间', '5月之前', '5月-6月', '7月-8月', '9月-10月', '11月及以后', '无'],
    noonTime: ['备考期间是否午休', '图书馆午休', '教室午休', '回寝室午休', '不午休'],
    exerciseTime: ['每周锻炼时间', '2小时以下', '2-5小时', '5-10小时', '10小时以上']
  };

  useEffect(() => {
    if (data) {
      updateTabelData();
    }
  }, [data, isFetching]);

  const columns: ColumnsType<DataType> = [
    {
      title: '影响因素',
      width: '60%',
      dataIndex: 'reason'
    },
    {
      title: '学生选择',
      dataIndex: 'option',
      render: (value, record, index) => {
        return <span>{record.value}</span>;
      }
    }
  ];

  /**
   * @description 拿到后端数据更新tableData
   */
  function updateTabelData() {
    let list: DataType[] = Object.keys(options).map((item: string, index: number) => {
      let arrIndex: number = +data!.questionnaire[item];

      let value: string[] = options[item];

      return {
        key: index + 1,
        reason: options[item][0],
        option: item,
        value: value[arrIndex]
      };
    });
    setTableData(list);
  }

  return (
    <div className={styles['stdInfo']}>
      <Table loading={isFetching} bordered columns={columns} dataSource={tableData} pagination={false} />
    </div>
  );
}
