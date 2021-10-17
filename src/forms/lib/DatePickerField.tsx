import React from 'react';
import { DatePicker, ValueState } from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';
import { spacing } from '@ui5/webcomponents-react-base';
import { DatePickerPropTypes } from '@ui5/webcomponents-react/webComponents/DatePicker';
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
  const innterStyle = {
    ...style,
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field: { ...rest } }) => (
        <DatePicker
          style={innterStyle}
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
          {...rest}
          {...props}
        />
      )}
    />
  );
};
