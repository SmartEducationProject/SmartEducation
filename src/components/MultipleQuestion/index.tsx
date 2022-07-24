import React, { useRef, useState } from 'react';
import { Radio, Form } from 'antd';
import styles from './index.module.less';
import { IOption, ISubProblem } from 'types/question';

const { Item } = Form;

export interface MultipleQuestionProps {
  index: number;
  name: string;
  question: string;
  options: IOption[];
  subProblem: ISubProblem[];
  itemProps?: React.ComponentProps<typeof Item>;
}

const MultipleQuestion: React.FC<MultipleQuestionProps> = ({ index, question, options, itemProps, name, subProblem }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const outWidth = options.length * 80;

  const containerStyles = {
    width: outWidth + 'px'
  };

  const headerSpanStyle = {
    display: 'inline-flex',
    width: `${parseInt(containerStyles.width) / (options.length + 1)}px`,
    justifyContent: 'center',
    color: 'rgb(54, 117, 83)'
  };

  const radioSpanStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    width: `${parseInt(containerStyles.width) / (options.length + 1)}px`,
    color: 'rgb(54, 117, 83)'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'rgb(54, 117, 83)'
  };

  return (
    <div className={styles['container']} style={containerStyles}>
      <div style={titleStyle}>{`${index}. ${question}`}</div>
      <div ref={headerRef}>
        <span style={headerSpanStyle}> {/* 表头的头 */}</span>
        {options.map((option) => (
          <span style={headerSpanStyle} key={option.optionId}>
            {option.content}
          </span>
        ))}
      </div>

      <Radio.Group>
        {subProblem.map((question) => (
          <Item name={question.content} className={`ant-form-inline`}>
            <span style={radioSpanStyle}>{question.content}</span>
            {options.map((option) => (
              <span style={radioSpanStyle}>
                <Radio style={{ width: '9px' }} key={option.optionId} value={option.optionId}></Radio>
              </span>
            ))}
          </Item>
        ))}
      </Radio.Group>
    </div>
  );
};

export default MultipleQuestion;
