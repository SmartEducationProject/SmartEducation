import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { IOption } from 'types/question';

interface CheckBoxProps {
  options: IOption[];
  multiple: number;
  checkSpanStyle: React.CSSProperties;
}

const MyCheckBox: React.FC<CheckBoxProps> = ({ options, checkSpanStyle, multiple }) => {
  const [optionsWithDisabled, setOptionsWithDisabled] = useState(
    Array.from(options, (option) => ({
      ...option,
      disabled: false
    }))
  );
  /** @description 限制最多只能选multiple项 */
  const onChange = (checkList: Array<CheckboxValueType>) => {
    console.log(checkList, multiple);
    if (checkList.length === multiple) {
      setOptionsWithDisabled((options) => options.map((option) => (checkList.find((item) => item === option.optionId) ? { ...option, disabled: false } : { ...option, disabled: true })));
    } else {
      setOptionsWithDisabled((options) => options.map((option) => ({ ...option, disabled: false })));
    }
  };

  return (
    <Checkbox.Group>
      {options.map((option) => (
        <span style={checkSpanStyle} key={option.optionId}>
          <Checkbox style={{ width: '18px' }} value={option.optionId} />
        </span>
      ))}
    </Checkbox.Group>
  );
};

export default MyCheckBox;
