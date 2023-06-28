import React from 'react';
import RankBox from 'components/RankBox';
import styles from './index.module.less';
import { ICollege, IPredict } from 'types/college';
import useCqupt from 'utils/useCqupt';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface CollegeRankProps {
  data: IPredict;
}

const CollegeRank: React.FC<CollegeRankProps> = ({ data: { college, count } }) => {
  const isCqupt = useCqupt();

  /** @description 对概率四舍五入保留两位 */

  college.forEach((item) => (item.rate = Number(item.rate.toFixed(2))));

  /** @description 展示其他院校 */
  if (!isCqupt) {
    college = college.filter((item) => item.name !== '重庆邮电大学(学硕)' && item.name !== '重庆邮电大学(专硕)');

    /** @description 原logo url已失效 这里手动换成可以用的 */
    // TODO: 后面接手的同学跟后端商量把数据库中的url换成可以用
    college.find((item) => item.name == '电子科技大学')!.logo = 'https://upload.wikimedia.org/wikipedia/zh/4/4a/UESTC_logo.jpg';

    /** @description 通过概率的大小对college进行排序 */
    college.sort((a, b) => b.rate - a.rate);

    return (
      <div className={styles['college-rank']}>
        <main>
          {college.map((item, index) => (
            <RankBox count={count} {...item} index={index + 1} key={item.id} />
          ))}
        </main>

        <p>
          <Tooltip
            arrowPointAtCenter
            title="该模型从学业成绩（如必修、选修绩点等），行为习惯（如图书馆出入记录等），考研期间准备情况等多方位数据入手提取特征，运用轻量级梯度提升树方法构建具体算法，该排序为模型输出概率排序，考研期间准备情况对模型输出具有主要的、决定性的作用。结果仅供参考，请结合实际情况具体判断。"
          >
            <QuestionCircleOutlined />
            （排名、概率为动态变化，仅供参考）
          </Tooltip>
        </p>
      </div>
    );
  } else {
    const academic = college.find((item) => item.name === '重庆邮电大学(学硕)') as ICollege;
    const professional = college.find((item) => item.name === '重庆邮电大学(专硕)') as ICollege;

    return (
      <div className={styles['college-rank']}>
        <main>
          <RankBox
            id={academic.id}
            name={'重庆邮电大学'}
            englishName={academic.englishName}
            description={academic.description}
            count={count}
            logo={academic.logo}
            professionalRank={professional.rank}
            professionalRate={professional.rate}
            academicRank={academic.rank}
            academicRate={academic.rate}
          />
        </main>
        <p>
          <Tooltip
            arrowPointAtCenter
            title="该模型从学业成绩（如必修、选修绩点等），行为习惯（如图书馆出入记录等），考研期间准备情况等多方位数据入手提取特征，运用轻量级梯度提升树方法构建具体算法，该排序为模型输出概率排序，考研期间准备情况对模型输出具有主要的、决定性的作用。结果仅供参考，请结合实际情况具体判断。"
          >
            <QuestionCircleOutlined />
            （排名、概率为动态变化，仅供参考）
          </Tooltip>
        </p>
      </div>
    );
  }
};

export default CollegeRank;
