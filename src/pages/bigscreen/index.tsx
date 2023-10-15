import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.less';
import StudyTimeRank from './components/StudyTimeRank';
import LastYearRank from './components/LastYearRank';
import AvgStudyTime from './components/AvgStudyTime';
import NumberOfLeaving from './components/NumberOfLeaving';
import CalendarHeatmap from './components/CalendarHeatmap';
import Header from './components/Header';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

const BigScreen: FunctionComponent = () => {
  const document: Document = window.document;
  const [fullScreen, setFullScreen] = useState(false);

  // 展开/全屏
  function requestFullScreen(element: HTMLElement) {
    const requestMethod = element.requestFullscreen;
    if (requestMethod) {
      requestMethod.call(element);
      setFullScreen(true);
    }
  }
  // 退出/全屏
  function exitFullScreen() {
    const exitMethod = document.exitFullscreen;
    if (exitMethod) {
      exitMethod.call(document);
      setFullScreen(false);
    }
  }

  useEffect(() => {
    return () => {
      exitFullScreen();
    };
  }, []);

  return (
    <div className={styles['bigScreenWrap']}>
      {fullScreen ? (
        <FullscreenExitOutlined
          onClick={() => {
            exitFullScreen();
          }}
          style={{ fontSize: '24px', marginRight: '10px', color: '#fff' }}
        />
      ) : (
        <FullscreenOutlined
          onClick={() => {
            requestFullScreen(document.body);
          }}
          style={{ fontSize: '24px', marginRight: '10px', color: '#fff' }}
        />
      )}
      <Header />
      <StudyTimeRank />
      <LastYearRank />
      <AvgStudyTime />
      <NumberOfLeaving />
      <CalendarHeatmap />
    </div>
  );
};
export default BigScreen;
