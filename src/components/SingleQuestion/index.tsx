import { IOption } from 'types/question';
import { Radio, Form, Space } from 'antd';
import React from 'react';
import styles from './index.module.less';

const { Item } = Form;

export interface SingleQuestionProps {
  index: number;
  name: string;
  question: string;
  options: IOption[];
  itemProps?: React.ComponentProps<typeof Item>;
}

const App: React.FC<SingleQuestionProps> = ({ index, question, options, itemProps, name }) => (
  <Item name={name} label={`${index}. ${question}`} rules={[{ required: true, message: '需要全部填写才能提交哦~' }]} className={styles['item']} {...itemProps}>
    <Radio.Group>
      <Space direction="vertical">
        {options.map((option) => (
          <Radio key={option.optionId} className={styles['radio']} value={option.optionId}>
            {option.content}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  </Item>
);

export default App;
