import React from 'react';
import { StepInput, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { spacing } from '@ui5/webcomponents-react-base';

import { StepInputPropTypes } from '@ui5/webcomponents-react/webComponents/StepInput';
import { BaseFieldProps } from '../types/form/baseprops';

export interface StepInputFieldProps
  extends BaseFieldProps,
    StepInputPropTypes {}

export const StepInputField = ({
  methods,
  fieldName,
  style,
  ...props
}: StepInputFieldProps) => {
  const innerStyle = {
    ...style,
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      control={methods.control}
      name={fieldName}
      render={({ field }) => (
        <StepInput
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
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          {...props}
        />
      )}
    />
  );
};
