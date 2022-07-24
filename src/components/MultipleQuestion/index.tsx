import React, { useRef, useState } from 'react';
import { Radio, Form, Input } from 'antd';
import Checkbox from './CheckBox';
import { IOption, ISubProblem } from 'types/question';

const { Item } = Form;

export interface MultipleQuestionProps {
  index: number;
  name: string;
  question: string;
  options: IOption[];
  subProblem: ISubProblem[];
  multiple?: number;
  itemProps?: React.ComponentProps<typeof Item>;
}

const MultipleQuestion: React.FC<MultipleQuestionProps> = ({ index, question, options, itemProps, name, subProblem, multiple }) => {
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

  const checkSpanStyle = {
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
    <div style={containerStyles}>
      <div style={titleStyle}>{`${index}. ${question}`}</div>
      <div ref={headerRef}>
        <span style={headerSpanStyle}> {/* 表头的头 */}</span>
        {options.map((option) => (
          <span style={headerSpanStyle} key={option.optionId}>
            {option.content}
          </span>
        ))}
      </div>

      {subProblem.map((question) => {
        return (
          <div key={question.questionId} style={{ display: 'flex' }}>
            <span style={checkSpanStyle}>{question.content}</span>
            {multiple ? (
              <Checkbox boxName={name + question.content} options={options} multiple={multiple} checkSpanStyle={checkSpanStyle} {...itemProps} />
            ) : (
              <Item name={name + question.content} rules={[{ required: true, message: '需要全部填写才能提交哦~' }]} {...itemProps}>
                <Radio.Group>
                  {options.map((option) => (
                    <span style={checkSpanStyle} key={option.optionId}>
                      <Radio style={{ width: '9px' }} value={option.optionId} />
                    </span>
                  ))}
                </Radio.Group>
              </Item>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MultipleQuestion;
