import React from 'react';
import { Option, Select, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { BaseFieldProps } from '../types/form/baseprops';
import { SelectPropTypes } from '@ui5/webcomponents-react/webComponents/Select';
import { OptionPropTypes } from '@ui5/webcomponents-react/webComponents/Option';

export interface SelectFieldProps extends BaseFieldProps, SelectPropTypes {
  optionsData: any[];
  optionProps?: Omit<OptionPropTypes, 'value'>;
  optionLabelKey: string;
  optionValueKey: string;
  optionSelectedValue?: string;
}

export const SelectField = ({
  methods,
  fieldName,
  optionsData,
  style,
  optionLabelKey,
  optionValueKey,
  optionSelectedValue,
  optionProps,
  ...props
}: SelectFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const getDefaultValue = (): string => {
    let defaultOptionValue: string = '';
    optionsData.forEach((option) => {
      if (option[optionValueKey] === optionSelectedValue) {
        defaultOptionValue = JSON.stringify(option);
      }
    });
    return defaultOptionValue;
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={getDefaultValue()}
      render={({ field }) => (
        <Select
          style={innerStyle}
          onChange={(e) => {
            const selectedOption = e.detail.selectedOption as HTMLSelectElement;
            optionsData.find((option) => {
              if (selectedOption.value !== '') {
                if (option[optionValueKey] === selectedOption.value) {
                  const selectedData = JSON.stringify(option);
                  field.onChange(selectedData);
                }
              } else {
                field.onChange(undefined);
              }
            });
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
          {optionsData &&
            optionsData.map((option, index) => (
              <Option
                key={index}
                value={option[optionValueKey]}
                selected={
                  option[optionValueKey] === optionSelectedValue ? true : false
                }
                {...optionProps}
              >
                {option[optionLabelKey]}
              </Option>
            ))}
        </Select>
      )}
    />
  );
};
