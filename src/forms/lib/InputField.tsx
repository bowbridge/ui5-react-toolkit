import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, InputPropTypes, ValueState } from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface InputFieldProps extends BaseFieldProps, InputPropTypes {}

export const InputField = ({
  fieldName,
  methods,
  style,
  ...props
}: InputFieldProps) => {
  const innerStyle = {
    ...style,
  };

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
          {...props}
        />
      )}
    />
  );
};
