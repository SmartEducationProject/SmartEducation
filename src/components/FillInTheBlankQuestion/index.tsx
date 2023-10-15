import { Form, InputNumber } from 'antd';
import React from 'react';
import styles from './index.module.less';

const { Item } = Form;

export interface SingleQuestionProps {
  index: number;
  name: string;
  question: string;
  itemProps?: React.ComponentProps<typeof Item>;
}

const App: React.FC<SingleQuestionProps> = ({ index, question, itemProps, name }) => (
  <Item name={name} label={`${index}. ${question}`} rules={[{ required: true, message: '需要全部填写才能提交哦~' }]} className={styles['item']} {...itemProps}>
    <InputNumber className="number_input" min={0} />
  </Item>
);

export default App;
