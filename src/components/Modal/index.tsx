import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Button, Divider, Space } from 'antd';
import { createPortal } from 'react-dom';
import styles from './index.module.less';

export const Modal = ({ visible, setVisible, children, onOk }: { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>>; children: React.ReactNode; onOk: () => void }) => {
  return (
    <Portal>
      {visible && (
        <div>
          <div className={styles['modal']}>
            <ModalOverlay onClick={() => setVisible(false)} />
            <ModalContent setVisible={setVisible} onOk={onOk}>
              {children}
            </ModalContent>
          </div>
        </div>
      )}
    </Portal>
  );
};

const ModalOverlay = ({ onClick }: { onClick?: MouseEventHandler }) => <div onClick={onClick} className={styles['modal-overlay']} />;

const ModalContent = ({ children, setVisible, onOk }: { children: React.ReactNode; setVisible: React.Dispatch<React.SetStateAction<boolean>>; onOk: () => Promise<void> | void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const ok = async () => {
    setIsLoading(true);
    await onOk();
    setIsLoading(false);
  };

  return (
    <div className={styles['modal-content']}>
      <main>{children}</main>
      <Divider />
      <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <Space>
          <Button onClick={() => setVisible(false)}>取消</Button>
          <Button loading={isLoading} onClick={ok} type="primary">
            确认
          </Button>
        </Space>
      </div>
    </div>
  );
};

export const Portal = ({ children }: { children: React.ReactNode }) => {
  // 创建一个 container 节点，作为 portal 的容器节点
  let containerRef = useRef<HTMLDivElement | null>(null);

  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
    // 将 container 节点添加到 document.body
    document.body.appendChild(containerRef.current);
  }

  // 当组件销毁时，移除 container 节点
  useEffect(() => {
    return function cleanup() {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }
    };
  }, []);

  return createPortal(children, containerRef.current);
};

export default Modal;
