import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import RankPieDoughnut from 'components/RankPieDoughnut';
import { useLib, useShareDataFromRank } from 'api/student';
import useHtml2Canvas from 'utils/useHtml2Canvas';
import getDays from 'utils/getDays';
import styles from './index.module.less';
import sharePeopleImg from 'assets/pic/student/people2024.png';
import effortImg from 'assets/pic/student/student-mine-share-effort.png';
import shareUrlImg from 'assets/pic/student/student-mine-share-url.png';
import shareQrCodeImg from 'assets/pic/student/student-mine-share-qr-code.png';
import studentIcon from 'assets/pic/student/student.png';
import upIcon from 'assets/pic/student/student-mine-share-up.png';
import { useUser } from 'context/userContext';

const Lib = () => {
  /** @description 接口调用 */
  const { data } = useLib();
  console.log('isData ok ?', data);
  const { data: show } = useShareDataFromRank(data?.yesterday.countRank || 0);

  /** @description 获得在馆时间段展示字符串 */
  const periodFormat = data?.yesterday?.period?.map((period) => `${period.from.split(' ')[1]}-${period.to.split(' ')[1]}`)?.join(', ');

  const now = new Date();
  /** @description 获取学生信息 */
  const { user } = useUser();
  /** @description 截图 */
  const [_, createSaveImg] = useHtml2Canvas('lib-container', true, {
    useCORS: true,
    scale: 4,
    width: document.querySelector(`#lib-container`)?.scrollWidth as number,
    height: document.querySelector(`#lib-container`)?.scrollHeight as number,
    onclone: (document: Document) => {
      (document.querySelector(`.${styles['share-box']}`) as HTMLDivElement).style.display = 'flex';
      (document.querySelector(`.${styles['sentence-box']}`) as HTMLDivElement).style.display = 'none';
      (document.querySelector(`.${styles['pie-box']}`) as HTMLDivElement).style.position = 'absolute';
      (document.querySelector(`.${styles['pie-box']}`) as HTMLDivElement).style.top = '580px';
      (document.querySelector(`.${styles['affix-box']}`) as HTMLDivElement).style.display = 'none';
      (document.querySelector(`.${styles['share-tips']}`) as HTMLElement).style.display = 'none';
      // document.querySelectorAll(`.${styles['pie-box']} > div`).forEach((div) => {
      //   (div as HTMLDivElement).style.width = '40%';
      // });
      // document.querySelectorAll(`.${styles['pie-box']} > div + div`).forEach((div) => ((div as HTMLDivElement).style.left = '170px'));
    }
  });

  return (
    <div id="lib-container" className={styles['lib-container']}>
      <div className={styles['share-tips']}>{show?.item}</div>

      <div className={styles['affix-box']}>
        <Affix offsetTop={220}>
          <Button shape="round" type="dashed" onClick={() => createSaveImg()}>
            截图分享
          </Button>
        </Affix>
      </div>

      <div id="sentence-box" className={styles['sentence-box']}>
        <p>昨日在馆时间：{periodFormat || '无'}</p>
        <p>昨日在馆总时长：{(data?.yesterday?.count as number)?.toFixed(1) || 0}h</p>
        <p>最近一周在馆总时长：{(data?.week?.count as number)?.toFixed(1) || 0}h</p>
        <p>最近一月在馆总时长：{(data?.month?.count as number)?.toFixed(1) || 0}h</p>
      </div>

      <div className={styles['pie-box']}>
        <RankPieDoughnut
          index={0}
          name={'昨日最早到馆时间排名'}
          rank={data?.yesterday?.earliestRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.yesterday?.earliestRank as number)) as number}
        />
        <RankPieDoughnut
          index={1}
          name={'昨日在馆总时长排名'}
          rank={data?.yesterday?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.yesterday?.countRank as number)) as number}
        />
        <RankPieDoughnut
          index={2}
          name={'最近一周在馆总时长排名'}
          rank={data?.week?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.week?.countRank as number)) as number}
        />
        <RankPieDoughnut
          index={3}
          name={'最近一月总时长排名'}
          rank={data?.month?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.month?.countRank as number)) as number}
        />
      </div>

      <div className={styles['share-box']}>
        <header>
          <img src={studentIcon} className={styles['student-img']} />
          <div className={styles['info-box']}>
            <h3>Hello,{user?.name}!</h3>
            <h4>美好的一天从看看我的考研情况开始~</h4>
            <h5>
              今天是{now.getFullYear()}年{now.getMonth() + 1}月{now.getDate()}日，距离考研上岸还有{getDays(user?.examTime as string)}天
            </h5>
            <h5>距离初次登录，你已努力了{getDays(user?.firstLogin as string)}天</h5>
          </div>
          <img src={upIcon} className={styles['up-img']} />
        </header>

        <main>
          <div className={styles['top-box']}>
            <img className={styles['people-img']} src={sharePeopleImg}></img>

            <div className={styles['top-right-box']}>
              <img className={styles['effort-img']} src={effortImg} />
              <div className={styles['share-sentence-box']}>
                <p>昨日在馆时间：{periodFormat || '无'}</p>
                <p>昨日在馆总时长：{(data?.yesterday?.count as number)?.toFixed(1) || 0}h</p>
                <p>最近一周在馆总时长：{(data?.week?.count as number)?.toFixed(1) || 0}h</p>
                <p>最近一月在馆总时长：{(data?.month?.count as number)?.toFixed(1) || 0}h</p>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <img className={styles['url-img']} src={shareUrlImg} />
          <img className={styles['qr-code-img']} src={shareQrCodeImg} />
        </footer>
      </div>
    </div>
  );
};

export default Lib;
