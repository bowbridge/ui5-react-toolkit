import { ComboBox, ComboBoxItem, ValueState } from '@ui5/webcomponents-react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ComboBoxPropTypes } from '@ui5/webcomponents-react/webComponents/ComboBox';
import { BaseFieldProps } from '../types/form/baseprops';
export interface ComboBoxFieldProps extends BaseFieldProps, ComboBoxPropTypes {
  optionsData: any[];
  optionValueKey: string;
  optionSelectedValue?: string;
}

export const ComboBoxField = ({
  methods,
  style,
  fieldName,
  optionsData,
  optionValueKey,
  optionSelectedValue,
  ...props
}: ComboBoxFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const getDefaultValue = (): string => {
    let defaultOptionValue: string = '';
    optionsData.forEach((option) => {
      if (
        optionSelectedValue &&
        optionSelectedValue !== '' &&
        option[optionValueKey] === optionSelectedValue
      ) {
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
        <ComboBox
          style={innerStyle}
          value={optionSelectedValue}
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
          onChange={(e) => {
            optionsData.find((option) => {
              if (e.target.value !== '') {
                if (option[optionValueKey] === e.target.value) {
                  const selectedData = JSON.stringify(option);
                  field.onChange(selectedData);
                }
              } else {
                field.onChange(undefined);
              }
            });
          }}
          {...props}
        >
          {optionsData &&
            optionsData.map((option, index) => (
              <ComboBoxItem key={index} text={option[optionValueKey]} />
            ))}
        </ComboBox>
      )}
    />
  );
};
