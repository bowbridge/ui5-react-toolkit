import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Icon,
  Input,
  InputPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

import '@ui5/webcomponents-icons/dist/hide.js';
import '@ui5/webcomponents-icons/dist/show.js';

export interface InputFieldProps extends BaseFieldProps, InputPropTypes {}

export const InputField = ({
  fieldName,
  methods,
  style,
  type,
  ...props
}: InputFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const [currentType, setCurrentType] = useState(type);
  const [visible, toggle] = useState(false);

  useEffect(() => {
    if (type === 'Password') {
      setCurrentType(visible ? 'Text' : 'Password');
    }
  }, [visible]);

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={props.value}
      render={({ field: { onChange, value, ref } }) => (
        <Input
          style={innerStyle}
          onChange={value => {
            onChange(value.target.value);
          }}
          onInput={value => {
            onChange(value.target.value);
          }}
          valueStateMessage={
            <span>
              {methods.formState.errors[fieldName]?.message
                ? methods.formState.errors[fieldName]?.message?.toString()
                : ''}
            </span>
          }
          valueState={
            methods.formState.errors[fieldName]
              ? ValueState.Error
              : ValueState.None
          }
          ref={ref}
          value={value}
          type={currentType}
          icon={
            type === 'Password' ? (
              <Icon
                name={visible ? 'hide' : 'show'}
                onClick={() => toggle(prev => !prev)}
              />
            ) : null
          }
          {...props}
        />
      )}
    />
  );
};
