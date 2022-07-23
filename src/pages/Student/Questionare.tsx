import { Form, Radio, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Item } = Form;

const Welcome = () => {
  return (
    <Form>
      <Item label="考研动机">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="apple">提高学历，有利于更好就业</Radio>
            <Radio value="pear">获得更多的知识，提高自身文化修养</Radio>
            <Radio value="orange">留恋校园生活</Radio>
            <Radio value="orange">其他</Radio>
          </Space>
        </Radio.Group>
      </Item>
    </Form>
  );
};

export default Welcome;
