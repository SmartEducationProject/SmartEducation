import React, { useState } from 'react';
import { Checkbox, Form } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { IOption } from 'types/question';

const { Item } = Form;

interface CheckBoxProps {
  boxName: string;
  options: IOption[];
  multiple: number;
  checkSpanStyle: React.CSSProperties;
  itemProps?: React.ComponentProps<typeof Item>;
}

const MyCheckBox: React.FC<CheckBoxProps> = ({ options, checkSpanStyle, multiple, boxName, itemProps }) => {
  const [optionsWithDisabled, setOptionsWithDisabled] = useState(
    Array.from(options, (option) => ({
      ...option,
      disabled: false
    }))
  );
  /** @description 限制最多只能选multiple项 */
  const onChange = (checkList: Array<CheckboxValueType>) => {
    if (checkList.length === multiple) {
      setOptionsWithDisabled((options) => options.map((option) => (checkList.find((item) => item === option.optionId) ? { ...option, disabled: false } : { ...option, disabled: true })));
    } else {
      setOptionsWithDisabled((options) => options.map((option) => ({ ...option, disabled: false })));
    }
  };

  return (
    <Item name={boxName} rules={[{ required: true, message: '需要全部填写才能提交哦~' }]} {...itemProps}>
      <Checkbox.Group onChange={onChange}>
        {optionsWithDisabled.map((option) => (
          <span style={checkSpanStyle} key={option.optionId}>
            <Checkbox style={{ width: '18px' }} value={option.optionId} disabled={option.disabled} />
          </span>
        ))}
      </Checkbox.Group>
    </Item>
  );
};

export default MyCheckBox;
