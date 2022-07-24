import React from 'react';
import { Button, Form, Input, Radio, Space } from 'antd';
import { Link } from 'react-router-dom';
import SingleQuestion from 'components/SingleQuestion';
import MultipleQuestion from 'components/MultipleQuestion';
import data from 'data/questionnaire.json';
import styles from './index.module.less';
import { useForm } from 'antd/lib/form/Form';

const { Item } = Form;

const Welcome = () => {
  console.log('render Welcome');

  const [form] = useForm();
  const onChange = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <Form form={form} onFinish={onChange}>
      {data.map((question, index) =>
        question.composition ? (
          <MultipleQuestion
            name={String(question.questionId)}
            index={index + 1}
            question={question.content}
            subProblem={question.subProblems}
            options={question.options}
            key={question.questionId}
            multiple={question?.multiple}
          />
        ) : (
          <SingleQuestion name={String(question.questionId)} index={index + 1} question={question.content} options={question.options} key={question.questionId} />
        )
      )}
      <Button type="primary" htmlType="submit" shape="round">
        Submit
      </Button>
    </Form>
  );
};

export default Welcome;
