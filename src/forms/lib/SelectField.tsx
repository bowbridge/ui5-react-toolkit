import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Option,
  OptionPropTypes,
  Select,
  SelectPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

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
    optionsData.forEach(option => {
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
          onChange={e => {
            const selectedOption = e.detail.selectedOption;
            optionsData.find(option => {
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
                ? methods.formState.errors[fieldName]?.message?.toString()
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
                selected={option[optionValueKey] === optionSelectedValue}
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

export const SelectFieldV2 = ({
  methods,
  fieldName,
  style,
  onChange,
  optionsData,
  optionLabelKey,
  optionValueKey,
  optionSelectedValue,
  ...props
}: SelectFieldProps) => {
  const {
    formState: { errors },
  } = methods;

  const innerStyle = {
    ...style,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={optionSelectedValue}
      render={({ field }) => (
        <Select
          {...field}
          style={innerStyle}
          onChange={e => {
            field.onChange(e.detail.selectedOption.value ?? '');
            if (onChange) onChange(e);
          }}
          valueStateMessage={
            <span>
              {errors[fieldName]?.message &&
                errors[fieldName]?.message?.toString()}
            </span>
          }
          valueState={errors[fieldName] ? ValueState.Error : ValueState.None}
          {...props}
        >
          {optionsData.map((option, index) => (
            <Option
              key={index}
              value={option[optionValueKey]}
              selected={field.value === option[optionValueKey]}
            >
              {option[optionLabelKey]}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};
