import React, { useRef, useState, useEffect, ReactElement } from 'react';
import LoadingSvg from './LoadingSvg';

interface PropsType {
  children: ReactElement;
  placeholder?: () => JSX.Element;
}
/**
 *
 * @param props 一个img元素 （必填）
 * @param placeholder 正在加载时的动画效果（可选值）
 * @returns
 */
export default function LazyLoadImg(props: PropsType) {
  const { children, placeholder: PlaceHolder = LoadingSvg } = props;
  // 处理错误逻辑
  if (children.type != 'img') {
    throw Error('children只能是一个img元素');
  }

  const attr = children.props; //拿到所有的属性

  const newProps = { ...attr, src: '', 'data-src': attr.src }; // 更新属性

  const LazyImg = (prop: any) => {
    const imgRef = useRef();
    const [loading, setLoading] = useState(true);
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
      const el: HTMLImageElement = imgRef.current! as HTMLImageElement;
      const src: string = el.dataset.src as string;
      el.src = src;
      el.onload = () => {
        setLoading(false);
        setHidden(false);
      };
    }, []);

    return (
      <>
        {loading && <PlaceHolder />}
        <img hidden={hidden} ref={imgRef} {...prop} />
      </>
    );
  };

  return (
    <>
      <LazyImg {...newProps}></LazyImg>
    </>
  );
}
