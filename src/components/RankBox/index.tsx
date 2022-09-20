import React from 'react';
import { ICollege } from 'types/college';
import styles from './index.module.less';
import rank1Img from 'assets/pic/student/college-rank-1.png';
import rank2Img from 'assets/pic/student/college-rank-2.png';
import rank3Img from 'assets/pic/student/college-rank-3.png';
import rank4Img from 'assets/pic/student/college-rank-4.png';
import rank5Img from 'assets/pic/student/college-rank-5.png';

const rankImgs = [rank1Img, rank2Img, rank3Img, rank4Img, rank5Img];

interface RankBoxProps extends Omit<Omit<ICollege, 'rate'>, 'rank'> {
  count: number;
  index?: number;
  rate?: number; // 其他院校概率
  rank?: number; // 学硕院校排名
  professionalRank?: number; // 专硕排名
  professionalRate?: number; // 专硕概率
  academicRank?: number; // 学硕排名
  academicRate?: number; // 学硕概率
}

const RankBox: React.FC<RankBoxProps> = ({ englishName, rate, name, rank, description, count, logo, index, professionalRank, professionalRate, academicRank, academicRate }) => {
  const getColor = (rate: number): string => {
    switch (true) {
      case rate < 0.3:
        return 'rgb(242,65,19)';
      case rate < 0.4:
        return '#06e8e8';
      default:
        return 'rgb(127,125,126)';
    }
  };

  if (academicRank) {
    return (
      <div className={styles['rank-box']} style={{ width: '65%' }}>
        <div className={styles['pic']}>
          <img src={logo} />
        </div>
        <div className={styles['desc']}>
          <h3>{name}</h3>
          <h4>{englishName}</h4>
          <h4>{description.join('/')}</h4>
        </div>
        <div className={styles['cqupt-rate-rank']}>
          <div style={{ color: getColor(academicRate as number) }}>
            <h4>学硕</h4>
            <h4>概率 {academicRate}</h4>
            <h4>
              排名 {academicRank}/{count}
            </h4>
          </div>
          <div style={{ color: getColor(professionalRate as number) }}>
            <h4>专硕</h4>
            <h4>概率 {professionalRate}</h4>
            <h4>
              排名 {professionalRank}/{count}
            </h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles['rank-box']}>
        <div className={styles['pic']}>
          <div style={{ backgroundImage: `url(${rankImgs[(index as number) - 1]})` }} />
          <img src={logo} />
        </div>
        <div className={styles['desc']}>
          <h3>{name}</h3>
          <h4>{englishName}</h4>
          <h4>{description.join('/')}</h4>
        </div>
        <div className={styles['rate-rank']} style={{ color: getColor(rate as number) }}>
          <h4>概率 {rate}</h4>
          <h4>
            排名 {rank}/{count}
          </h4>
        </div>
      </div>
    );
  }
};

export default RankBox;
