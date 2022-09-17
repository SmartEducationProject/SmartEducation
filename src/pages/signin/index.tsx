import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import Person from 'assets/pic/signin/person.png';
import Signin from 'assets/pic/signin/signin.png';
import useDebounceHook from 'utils/useDebounceFn';
import { studentLogin } from 'api/student';
import { addApplication, teacherLogin } from 'api/teacher';
import { message, Modal, Input, InputRef } from 'antd';
const SignIn: FunctionComponent = () => {
  //输入框
  const InputRef = useRef<InputRef | null>(null);

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
      console.log('result', result);

      if (result.code === 20000) {
        if (result.data.state === 0) {
          setIsModalOpen(true);
        } else {
          localStorage.setItem('useRole', JSON.stringify(['teacher']));
          localStorage.setItem('authority', result.data.state);
          navigate('/teacher/predictresult', {
            replace: true
          });
        }
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = async () => {
    const result = await addApplication({ description: InputRef.current?.input?.value as string });
    result.info == 'success' ? message.success('申请成功，请等待审批通过') : message.error('由于网络原因，申请失败');
    if (InputRef.current && InputRef.current.input) {
      InputRef.current.input.value = ' ';
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (InputRef.current && InputRef.current.input) {
      InputRef.current.input.value = '';
    }
    setIsModalOpen(false);
  };

  return (
    <div className={styles['signin']}>
      <Modal title="提示" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="提交申请" cancelText="取消申请">
        <p>为保证学生隐私，当前您没有权限访问，若要访问请联系计算机学院负责教学及学生工作的相关负责人！</p>
        <Input placeholder="若要申请,请输入理由" ref={InputRef}></Input>
      </Modal>
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
