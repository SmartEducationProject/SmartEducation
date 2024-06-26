import { Input, Space } from 'antd';
import { getLeaderList, searchLeaderList } from '@/api/leader';
import { LeaderPageInfo } from '@/types/leader';
import { useEffect, useState } from 'react';
import { message } from 'antd';

export const sessionKey = (option: 'get' | 'set' | 'del', key: string, value?: string): string => {
  if (option == 'get') {
    return sessionStorage.getItem(key) as string;
  } else if (option == 'set') {
    sessionStorage.setItem(key, value ? value : '');
    return 'set ok';
  } else if (option == 'del') {
    sessionStorage.removeItem(key);
    return 'del ok';
  } else return 'error opiton';
};

const { Search } = Input;
interface searchProps {
  setLeaderList: React.Dispatch<any>;
  setTotalPg: React.Dispatch<any>;
  setcurrentpage: React.Dispatch<any>;
}
const Searchs = (props: searchProps) => {
  const [inputValue, setInputValue] = useState<string>(); //主要用于判断分页触发哪个请求

  const { setLeaderList, setTotalPg, setcurrentpage } = props;
  const onSearch = async (value: string) => {
    if (!value.trim()) {
      // sessionStorage.setItem('isSearching' , "false") //点击清空，退出搜索逻辑（相当于搜索条件为空的搜索结果=直接查询所有）
      sessionKey('set', 'isSearching', 'false');
    } else {
      // sessionStorage.setItem('isSearching' ,"true") // 有内容，进入搜索逻辑
      sessionKey('set', 'isSearching', 'true');
    }
    sessionKey('set', 'key', value.trim());

    if (value.trim() == '') {
      value = '';
    }
    const result: LeaderPageInfo = await searchLeaderList({ inquire: value.trim(), page: 1 });

    const { total, items, current } = result;
    if (total === 0) {
      message.info('抱歉！没有查找到相关信息的数据，请修改搜索关键词试试！');
      setInputValue('');
      return;
    }
    setLeaderList(items);
    setTotalPg(total);
    setcurrentpage(current);
  };

  useEffect(() => {
    if (sessionKey('get', 'key')) {
      setInputValue(sessionKey('get', 'key'));
    }
  }, []);

  return (
    <Space direction="vertical">
      <Search
        placeholder="输入导师相关信息以查找"
        allowClear
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        enterButton
        size="large"
        onSearch={onSearch}
      />
    </Space>
  );
};

export default Searchs;
