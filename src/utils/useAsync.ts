import { useState } from 'react';

/**
 * @param data 数据
 * @param {Error} error 错误
 * @param {'idle' | 'loading' | 'success' | 'error'} stat 状态
 */
interface State<D> {
  data: D | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  error: Error | null;
}

/** @description 默认初始状态 */
const defaultInitialState = {
  data: null,
  status: 'idle',
  error: null
};

/** @description 默认初始配置 */
const defaultConfig = {
  throwOnError: false
};

/**
 * @description 处理异步函数
 * @param {Partial<State<D>>} initialState 异步函数
 */
// 前面的<D>指的是useAsync传入的泛型
// 传入的initialState中的属性都是可选的，如果不传入，则使用默认值
const useAsync = <D>(initialState?: Partial<State<D>>, initialConfig?: Partial<typeof defaultConfig>) => {
  const config = { ...defaultConfig, ...initialConfig };
  const [state, setState] = useState({ ...defaultInitialState, ...initialState });

  /** @description 设置加载状态 */
  const setLoading = () => setState({ ...state, status: 'loading' });
  /** @description 设置数据 */
  const setData = (data: D) => setState({ data, status: 'success', error: null });
  /** @description 失败后设置错误 */
  const setError = (error: Error) => setState({ data: null, status: 'error', error });

  /**
   * @description 执行函数，加上一些状态和错误处理的逻辑
   * @param promise 异步函数
   */
  const run = (promise: Promise<D>) => {
    /** @description 判断传入的参数是否为Promise类型 */
    if (!promise || typeof promise.then !== 'function') throw new Error('使用run必须传入Promise类型的参数');

    /** @description 加载中 */
    setLoading();

    return (
      promise
        /** @description 异步请求成功 */
        .then((data) => {
          setData(data);
          return data;
        })
        /** @description 异步请求失败 */
        .catch((error) => {
          // 抛出的错误必须是catch接，否则会在控制台报错
          //但是有的时候我们不想抛出错误，想要后面仍用then来接，所以我们可以使用config.throwOnError来控制是否抛出错误
          if (config.throwOnError) return Promise.reject(error);
          else return error;
        })
    );
  };

  return {
    ...state,
    run,
    setData,
    setError,
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error'
  };
};

export default useAsync;
