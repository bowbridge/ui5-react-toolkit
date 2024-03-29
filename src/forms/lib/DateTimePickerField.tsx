import React from 'react';
import { Controller } from 'react-hook-form';
import {
  DateTimePicker,
  DateTimePickerPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface DateTimePickerFieldProps
  extends BaseFieldProps,
    DateTimePickerPropTypes {}

export const DateTimePickerField = ({
  methods,
  fieldName,
  style,
  ...props
}: DateTimePickerFieldProps) => {
  const innerStyle = {
    ...style,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <DateTimePicker
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
