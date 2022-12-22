import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './index.module.less';
import Person from 'assets/pic/signin/person.png';
import Signin from 'assets/pic/signin/signin.png';
import { studentLogin } from 'api/student';
import { addApplication, teacherLogin } from 'api/teacher';
import { message, Modal, Input, InputRef } from 'antd';
import { useUser } from 'context/userContext';
import { Login } from 'api/api';

const SignIn: FunctionComponent = () => {
  const { setUser } = useUser(); // 修改UserContext的值
  //输入框
  const InputRef = useRef<InputRef | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  /**
   *  @description:对input的输入进行消抖处理
   */
  // const [signIhValue, setSignIhValue] = useState<string | null>('');
  // useDebounceHook(signIhValue, 1000);
  // const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSignIhValue(e.target.value);
  // };

  /**
   * @description:点击登录按钮，进行登录
   * @params {}
   * @return  {}
   */

  const handleSignIn = async () => {
    const currentUrl = window.location.href;
    if (pathname == '/' && !currentUrl.includes('token')) {
      const a = document.createElement('a');
      a.setAttribute('referrerpolicy', 'no-referrer');
      a.setAttribute('href', 'http://172.20.2.82:8080/tyrzm/login/');
      a.click();
    } else {
      if (currentUrl.split('?')[1]?.startsWith('token')) {
        localStorage.setItem('token', currentUrl.split('?')[1].split('=')[1]);
        const loginResult = await Login();

        if (loginResult.code == 20000) {
          if (loginResult.data.SFRZH.startsWith('1')) {
            const result = await studentLogin({ sfrzh: loginResult.data.SFRZH });

            if (result.code == 20000) {
              setUser(result.data); // 修改UserContext的值
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              console.log(JSON.parse(localStorage.getItem('info')!));
              JSON.parse(localStorage.getItem('info')!).hasPredict ? localStorage.setItem('useRole', JSON.stringify(['predict'])) : localStorage.setItem('useRole', JSON.stringify(['unPredict']));
              /** @description 判断是否已填写过问卷，若填写过直接跳转到college，若未填写跳转为welcome */
              history.replaceState(null, '', currentUrl.split('?')[0]);

              console.log(result.data.hasPredict);
              result.data.hasPredict
                ? navigate('/student/choice', {
                    replace: true
                  })
                : navigate('/student/choice', {
                    replace: true
                  });
            } else {
              message.error('你目前没有权限访问');
            }
          } else if (loginResult.data.SFRZH.startsWith('0') || loginResult.data.SFRZH.startsWith('7')) {
            const result = await teacherLogin({ sfrzh: loginResult.data.SFRZH });
            console.log('result', result);
            setUser(result.data); // 修改UserContext的值
            if (result.code === 20000) {
              if (result.data.state === 0) {
                setIsModalOpen(true);
              } else {
                localStorage.setItem('useRole', JSON.stringify(['teacher']));
                localStorage.setItem('authority', result.data.state);
                history.replaceState(null, '', currentUrl.split('?')[0]);
                navigate('/teacher/predictresult', {
                  replace: true
                });
              }
            } else {
              message.error('你目前没有权限访问');
            }
          }
        }
      }
    }
  };

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

  useEffect(() => {
    localStorage.removeItem('currentPage');
  }, []);

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
          {/* <div className={styles['signin-form']}>
            <input type="text" name="账号" id="" placeholder="统一认证码" onChange={(e) => inputChange(e)} />
          </div> */}
          <img src={Signin} alt="" onClick={() => handleSignIn()} />
        </div>
        <img src={Person} alt="" />
      </div>
    </div>
  );
};
export default SignIn;
