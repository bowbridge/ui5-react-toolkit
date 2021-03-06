import React from 'react';
import { TimePicker, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { DatePickerPropTypes } from '@ui5/webcomponents-react/webComponents/DatePicker';
import { BaseFieldProps } from '../types/form/baseprops';

export interface TimePickeFieldProps
  extends BaseFieldProps,
    DatePickerPropTypes {}

export const TimePickerField = ({
  methods,
  fieldName,
  style,
  ...props
}: TimePickeFieldProps) => {
  const innerStyle = {
    ...style,
  };
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <TimePicker
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
        />
      )}
    />
  );
};
