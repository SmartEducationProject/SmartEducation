import React from 'react';
import { Form, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';
import data from 'data/questionnaire';
import SingleQuestion from 'components/SingleQuestion';
import MultipleQuestion from 'components/MultipleQuestion';
import FillInTheBlankQuestion from 'components/FillInTheBlankQuestion';
import { useSubmit } from 'api/student';
import { ISubQuestion } from 'types/question';
import styles from './index.module.less';
import envelopeImg from 'assets/pic/student/envelope.png';

const Welcome = () => {
  const { mutateAsync } = useSubmit();
  const navigate = useNavigate();
  const [form] = useForm();

  const onChange = async () => {
    Modal.confirm({
      title: '是否确认提交调查问卷？',
      content: '调查问卷只能填写一次哦~',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        return new Promise(async (resolve, reject) => {
          try {
            await mutateAsync(form.getFieldsValue()); // 提交问卷
            resolve('success');
            localStorage.setItem('useRole', JSON.stringify(['predict']));
            navigate('/student/choice', {
              replace: true
            });
          } catch (error) {
            reject();
          }
        });
      }
    });
  };

  return (
    <div className={styles['container']}>
      <main>
        <header>
          <img src={envelopeImg} className={styles['envelope-img']} />
          <span>考研预测-调查问卷</span>
        </header>
        <Form layout="vertical" requiredMark={false} scrollToFirstError form={form} onFinish={onChange} className={styles['form-box']}>
          {data.map((question, index) =>
            question.options ? (
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
            ) : (
              <FillInTheBlankQuestion name={String(question.value)} index={index + 1} question={question.content} key={question.questionId} />
            )
          )}
          <button className={styles['submit-btn']} type="submit"></button>
        </Form>
      </main>
    </div>
  );
};

export default Welcome;
