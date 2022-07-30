import React from 'react';
import RankBox from 'components/RankBox';
import styles from './index.module.less';
import { ICollege, IPredict } from 'types/college';
import useCqupt from 'utils/useCqupt';

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
    /** @description 通过概率的大小对college进行排序 */
    college.sort((a, b) => b.rate - a.rate);

    return (
      <div className={styles['college-rank']}>
        {college.map((item, index) => (
          <RankBox count={count} {...item} index={index + 1} key={item.id} />
        ))}
      </div>
    );
  } else {
    const academic = college.find((item) => item.name === '重庆邮电大学(学硕)') as ICollege;
    const professional = college.find((item) => item.name === '重庆邮电大学(专硕)') as ICollege;

    return (
      <div className={styles['college-rank']}>
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
      </div>
    );
  }
};

export default CollegeRank;
