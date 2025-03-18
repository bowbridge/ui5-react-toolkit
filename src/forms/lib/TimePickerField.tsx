import React from 'react';
import { Controller } from 'react-hook-form';
import {
  TimePicker,
  TimePickerPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface TimePickerFieldProps
  extends BaseFieldProps,
    TimePickerPropTypes {}

export const TimePickerField = ({
  methods,
  fieldName,
  style,
  ...props
}: TimePickerFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const errorMessage = String(methods.formState.errors[fieldName]?.message || '');

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <TimePicker
          style={innerStyle}
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
          {...field}
          {...props}
        />
      )}
    />
  );
};
