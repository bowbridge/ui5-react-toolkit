import React from 'react';
import { Option, Select, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../types/form/baseprops';
import { OptionsType } from '../types/form/options';
import { SelectPropTypes } from '@ui5/webcomponents-react/webComponents/Select';

export interface SelectFieldProps extends BaseFieldProps, SelectPropTypes {
  options: OptionsType[];
}

export const SelectField = ({
  methods,
  fieldName,
  options,
  style,
  ...props
}: SelectFieldProps) => {
  const innerStyle = {
    ...style,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <Select
          style={innerStyle}
          {...field}
          onChange={(e) => {
            const selectedOption = e.detail.selectedOption as HTMLSelectElement;
            field.onChange(selectedOption.value);
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
          {...props}
        >
          {options.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};
