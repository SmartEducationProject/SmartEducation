import React from 'react';
import { Form, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import data from 'data/questionnaire';
import SingleQuestion from 'components/SingleQuestion';
import MultipleQuestion from 'components/MultipleQuestion';
import useAsync from 'utils/useAsync';
import { submit } from 'api/student';
import { ISubQuestion } from 'types/question';
import styles from './index.module.less';
import envelopeImg from 'assets/pic/student/envelope.png';

const Welcome = () => {
  const navigate = useNavigate();
  const { run, isLoading } = useAsync();
  const [form] = useForm();

  const onChange = async () => {
    await run(submit(form.getFieldsValue()));
    navigate('/student/choice');
  };

  return (
    <div className={styles['container']}>
      <Spin spinning={isLoading} size="large">
        <main>
          <header>
            <img src={envelopeImg} className={styles['envelope-img']} />
            <span>考研预测-调查问卷</span>
          </header>
          <Form form={form} onFinish={onChange} className={styles['form-box']}>
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
