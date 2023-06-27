import React from 'react';
import styles from './index.module.less';
import png from '../../../assets/pic/student/college-study-experience.png';

export default function Share() {
  return (
    <>
      <header className={styles['header']}>
        <h2>学长学姐考研经验</h2>
        <img src={png} alt={'icon'} />
      </header>

      <div className={styles['tips']}>
        <div>
          当前考研经验分享模块正在建设中，不过您可以在 <span>热门院校页面</span> 查看部分分享；
        </div>
        <div>
          如果觉得这些分享有意义的话，希望您可以<span>关注本网站</span> ，在分享模块完善后，发表您的分享，帮助到更多的学弟学妹；
        </div>
        <div>感谢您的理解与参与！</div>
      </div>

      {/* <Outlet /> */}
    </>
  );
}
