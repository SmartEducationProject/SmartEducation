import React, { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import Person from 'assets/pic/signin/person.png';
import Signin from 'assets/pic/signin/signin.png';
import useDebounceHook from 'utils/useDebounceFn';
import { studentLogin } from 'api/student';
import { teacherLogin } from 'api/teacher';
import { message } from 'antd';
const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();
  /**
   *  @description:对input的输入进行消抖处理
   */
  const [signIhValue, setSignIhValue] = useState<string | null>('');
  useDebounceHook(signIhValue, 1000);
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIhValue(e.target.value);
  };

  /**
   * @description:点击登录按钮，进行登录
   * @params {}
   * @return  {}
   */
  const handleSignIn = async () => {
    if (signIhValue === '') {
      alert('请输入统一认证码');
      return;
    } else if (signIhValue?.startsWith('1')) {
      const result = await studentLogin({ sfrzh: signIhValue });
      if (result.code === 20000) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        JSON.parse(localStorage.getItem('studentInfo')!).hasPredict
          ? localStorage.setItem('useRole', JSON.stringify(['predict']))
          : localStorage.setItem('useRole', JSON.stringify(['unPredict', 'predict']));
        /** @description 判断是否已填写过问卷，若填写过直接跳转到college，若未填写跳转为welcome */
        result.data.hasPredict
          ? navigate('/student', {
              replace: true
            })
          : navigate('/student/welcome', {
              replace: true
            });
      } else {
        message.error('统一认证码输入错误');
      }
      return;
    } else if (signIhValue?.startsWith('0')) {
      const result = await teacherLogin({ sfrzh: signIhValue });
      if (result.code === 20000) {
        localStorage.setItem('useRole', JSON.stringify(['teacher']));
        navigate('/teacher/predictresult', {
          replace: true
        });
      } else {
        message.error('统一认证码输入错误');
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem('studentInfo')) {
      const studentInfo = JSON.parse(localStorage.getItem('studentInfo') || '');
      studentInfo.hasPredict == 1 ? navigate('/student') : navigate('/student/questionnaire');
    }
    if (localStorage.getItem('token')) {
      navigate('/teacher/predictresult');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['signin']}>
      <div className={styles['signin-content']}>
        <div className={styles['signin-left']}>
          <div className={styles['signin-title']}>
            <div>开启你的</div>
            <div>考研预测吧</div>
            <p>Wish you success!</p>
          </div>
          <div className={styles['signin-form']}>
            <input type="text" name="账号" id="" placeholder="统一认证码" onChange={(e) => inputChange(e)} />
          </div>
          <img src={Signin} alt="" onClick={() => handleSignIn()} />
        </div>
        <img src={Person} alt="" />
      </div>
    </div>
  );
};
export default SignIn;
