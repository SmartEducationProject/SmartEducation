import { Input, Space } from 'antd';
import { getLeaderList, searchLeaderList } from '@/api/leader';
import { LeaderPageInfo } from '@/types/leader';

const { Search } = Input;
interface searchProps {
  setLeaderList: React.Dispatch<any>;
  setTotalPg: React.Dispatch<any>;
  setcurrentpage: React.Dispatch<any>;
}
const Searchs = (props: searchProps) => {
  let { setLeaderList, setTotalPg, setcurrentpage } = props;
  const onSearch = async (value: string) => {
    let result: LeaderPageInfo = await searchLeaderList({ inquire: value, page: 1 });
    let { total, items, current } = result;
    setLeaderList(items);
    setTotalPg(total);
    setcurrentpage(current);
  };

  return (
    <Space direction="vertical">
      <Search placeholder="输入导师相关信息以查找" allowClear enterButton size="large" onSearch={onSearch} />
    </Space>
  );
};

export default Searchs;
