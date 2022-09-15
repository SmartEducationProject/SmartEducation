import React, { useState } from 'react';
import { Form, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import data from 'data/questionnaire';
import SingleQuestion from 'components/SingleQuestion';
import MultipleQuestion from 'components/MultipleQuestion';
import { useSubmit } from 'api/student';
import { ISubQuestion } from 'types/question';
import styles from './index.module.less';
import envelopeImg from 'assets/pic/student/envelope.png';

const Welcome = () => {
  const { mutateAsync } = useSubmit();
  const navigate = useNavigate();
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onChange = async () => {
    try {
      setIsLoading(true);
      await mutateAsync(form.getFieldsValue()); // 提交问卷
      setIsLoading(false);
      localStorage.setItem('useRole', JSON.stringify(['predict']));
      navigate('/student/choice', {
        replace: true
      });
    } catch (error) {
      setIsLoading(false);
      navigate('/student/welcome');
    }
  };

  return (
    <div className={styles['container']}>
      <Spin spinning={isLoading} size="large">
        <main>
          <header>
            <img src={envelopeImg} className={styles['envelope-img']} />
            <span>考研预测-调查问卷</span>
          </header>
          <Form requiredMark={false} scrollToFirstError form={form} onFinish={onChange} className={styles['form-box']}>
            {data.map((question, index) =>
              question.composition ? (
                <MultipleQuestion
                  index={index + 1}
                  question={question.content}
                  subQuestion={question.subQuestions as ISubQuestion[]}
                  options={question.options}
                  multiple={question?.multiple}
                  key={question.questionId}
                />
              ) : (
                <SingleQuestion name={String(question.value)} index={index + 1} options={question.options} question={question.content} key={question.questionId} />
              )
            )}
            <button className={styles['submit-btn']} type="submit"></button>
          </Form>
        </main>
      </Spin>
    </div>
  );
};

export default Welcome;
