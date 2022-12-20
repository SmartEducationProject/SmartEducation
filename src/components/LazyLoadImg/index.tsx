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
  let { children, placeholder: PlaceHolder = LoadingSvg } = props;
  // 处理错误逻辑
  if (children.type != 'img') {
    throw Error('children只能是一个img元素');
  }

  let attr = children.props; //拿到所有的属性

  let newProps = { ...attr, src: '', 'data-src': attr.src }; // 更新属性

  const LazyImg = (prop: any) => {
    const imgRef = useRef();
    let [loading, setLoading] = useState(true);
    let [hidden, setHidden] = useState(true);
    useEffect(() => {
      let el: HTMLImageElement = imgRef.current! as HTMLImageElement;
      let src: string = el.dataset.src as string;
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
