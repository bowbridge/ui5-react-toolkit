import React from 'react';
import { DateTimePicker, ValueState } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { Controller } from 'react-hook-form';
import { DateTimePickerPropTypes } from '@ui5/webcomponents-react/webComponents/DateTimePicker';
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
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
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
