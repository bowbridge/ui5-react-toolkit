import { ComboBox, ComboBoxItem, ValueState } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ComboBoxPropTypes } from '@ui5/webcomponents-react/webComponents/ComboBox';
import { BaseFieldProps, InputOptionsType } from '../types/form/baseprops';

export interface ComboBoxFieldProps extends BaseFieldProps, ComboBoxPropTypes {
  options: InputOptionsType[];
}

export const ComboBoxField = ({
  methods,
  style,
  fieldName,
  options,
  ...props
}: ComboBoxFieldProps) => {
  const innerStyle = {
    ...style,
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <ComboBox
          style={innerStyle}
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
          {...field}
          {...props}
        >
          {options &&
            options.map((option, index) => (
              <ComboBoxItem key={index} text={option.text} />
            ))}
        </ComboBox>
      )}
    />
  );
};
