import { IOption } from 'types/question';
import type { RadioChangeEvent } from 'antd';
import { Radio, Form, Space } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const { Item } = Form;

export interface SingleQuestionProps {
  index: number;
  name: string;
  question: string;
  options: IOption[];
  itemProps?: React.ComponentProps<typeof Item>;
}

const App: React.FC<SingleQuestionProps> = ({ index, question, options, itemProps, name }) => {
  // const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    // setValue(e.target.value);
  };

  return (
    <Item name={name} label={`${index}. ${question}`} rules={[{ required: true, message: '需要全部填写才能提交哦~' }]} className={styles['item']} {...itemProps}>
      <Radio.Group onChange={onChange}>
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
};

export default App;
