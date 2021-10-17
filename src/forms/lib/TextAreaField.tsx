import React from 'react';
import { Controller } from 'react-hook-form';
import { TextArea, ValueState } from '@ui5/webcomponents-react';

import { TextAreaPropTypes } from '@ui5/webcomponents-react/webComponents/TextArea';
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

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <TextArea
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
