import React from 'react';
import { Controller } from 'react-hook-form';
import {
  DateRangePicker,
  DateRangePickerPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface DateRangePickerFieldProps
  extends BaseFieldProps,
    DateRangePickerPropTypes {}

export const DateRangePickerField = ({
  methods,
  fieldName,
  style,
  ...props
}: DateRangePickerFieldProps) => {
  const innerStyle = {
    ...style,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <DateRangePicker
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
