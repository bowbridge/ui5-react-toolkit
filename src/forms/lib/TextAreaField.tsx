import React from 'react';
import { Controller } from 'react-hook-form';
import {
  TextArea,
  TextAreaPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface TextAreaFieldProps extends BaseFieldProps, TextAreaPropTypes {}

export const TextAreaField = ({
  fieldName,
  methods,
  style,
  ...props
}: TextAreaFieldProps) => {
  const innerStyle = {
    ...style,
  };

  const errorMessage = String(methods.formState.errors[fieldName]?.message || '');

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <TextArea
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
