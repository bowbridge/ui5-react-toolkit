import React from 'react';
import { Controller } from 'react-hook-form';
import {
  ComboBox,
  ComboBoxItem,
  ComboBoxPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

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
    optionsData.forEach(option => {
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

  const errorMessage = String(methods.formState.errors[fieldName]?.message || '');

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
              {errorMessage}
            </span>
          }
          valueState={
            methods.formState.errors[fieldName]
              ? ValueState.Error
              : ValueState.None
          }
          onChange={e => {
            optionsData.find(option => {
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
