import React from 'react';
import { FlexBox, RadioButton, ValueState } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { Controller } from 'react-hook-form';
import { RadioButtonPropTypes } from '@ui5/webcomponents-react/webComponents/RadioButton';
import { BaseFieldProps, InputOptionsType } from '../types/form/baseprops';

export interface RadioButtonFieldProps
  extends BaseFieldProps,
    RadioButtonPropTypes {
  options: InputOptionsType[];
}

interface RadioButtonElement extends HTMLInputElement {
  text: string;
}

export const RadioButtonField = ({
  methods,
  fieldName,
  style,
  options,
  ...props
}: RadioButtonFieldProps) => {
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
        <FlexBox>
          {options &&
            options.map((option, index) => (
              <RadioButton
                style={innerStyle}
                key={index}
                name={fieldName}
                valueState={
                  methods.formState.errors[fieldName]
                    ? ValueState.Error
                    : ValueState.None
                }
                text={option.text}
                onChange={(e) => {
                  const element = e.target as RadioButtonElement;
                  field.onChange(element.text);
                }}
                {...props}
              />
            ))}
        </FlexBox>
      )}
    />
  );
};
