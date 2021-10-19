import React from 'react';
import { CheckBox, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { CheckBoxPropTypes } from '@ui5/webcomponents-react/webComponents/CheckBox';
import { BaseFieldProps } from '../types/form/baseprops';

export interface CheckBoxFieldProps extends BaseFieldProps, CheckBoxPropTypes {}

export const CheckBoxField = ({
  fieldName,
  methods,
  ...props
}: CheckBoxFieldProps) => {
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={props.checked}
      render={({ field: { onChange, value, ...restField } }) => (
        <CheckBox
          style={{ width: '40px' }}
          onChange={(e) => {
            const element = e.target as HTMLInputElement;
            onChange(element.checked);
          }}
          checked={value}
          valueState={
            methods.formState.errors[fieldName]
              ? ValueState.Error
              : ValueState.None
          }
          {...restField}
          {...props}
        />
      )}
    />
  );
};
