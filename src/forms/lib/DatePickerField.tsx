import React from 'react';
import { Controller } from 'react-hook-form';
import {
  DatePicker,
  DatePickerPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface DatePickerFieldProps
  extends BaseFieldProps,
    DatePickerPropTypes {}

export const DatePickerField = ({
  fieldName,
  methods,
  style,
  ...props
}: DatePickerFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const errorMessage = String(methods.formState.errors[fieldName]?.message || '');

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field: { ...rest } }) => (
        <DatePicker
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
          {...rest}
          {...props}
        />
      )}
    />
  );
};
