import React from 'react';
import { Input, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { InputPropTypes } from '@ui5/webcomponents-react/webComponents/Input';
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
          onChange={(value) => {
            onChange(value.target.value);
          }}
          valueStateMessage={
            <span>
              {methods.formState.errors[fieldName]?.message
                ? methods.formState.errors[fieldName]?.message
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
