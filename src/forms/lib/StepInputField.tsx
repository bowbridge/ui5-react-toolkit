import React from 'react';
import { Controller } from 'react-hook-form';
import {
  StepInput,
  StepInputPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

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
          onChange={e => {
            field.onChange(e.target.value);
          }}
          {...props}
        />
      )}
    />
  );
};
