import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosInstance } from '@/utils/request';
import { useStudentInfo, infoType } from '@/api/teacher';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface dataType {
  reason: string; // 字段
  option: string | number; // 选项字段

  title: string; //中文
  answer: string; //
  avarage: string | number;
  compare?: string;
}

export default function studentInfo() {
  const loaction = useLocation();
  let stuId: number | string = '';
  useEffect(() => {
    stuId = loaction.search?.split('=')[1];

    // let { data } = useStudentInfo(stuId)
    let result = axiosInstance.post('/teacher/getQuestionnaire', { XH: 2019211011 }).then((res) => res.data.data);

    console.log('stu info is data : ', result);
  }, [stuId]);
  // let tableDate:dataType[] = [
  //   {
  //     reason : ,
  //     answer : "1",
  //     title : "考研动机",
  //     avarage : "1",
  //     option : ""
  //   },
  // ]

  return <div>studentInfo</div>;
}
