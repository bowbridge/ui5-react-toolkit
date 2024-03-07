import React from 'react';
import { Controller } from 'react-hook-form';
import {
  CheckBox,
  CheckBoxPropTypes,
  ValueState,
} from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface CheckBoxFieldProps extends BaseFieldProps, CheckBoxPropTypes {}

export const CheckBoxField = ({
  fieldName,
  methods,
  ...props
}: CheckBoxFieldProps) => {
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={props.checked}
      render={({ field: { onChange, value, ...restField } }) => (
        <CheckBox
          style={{ width: '40px' }}
          onChange={e => {
            onChange(e.target.checked);
          }}
          checked={value}
          valueState={
            methods.formState.errors[fieldName]
              ? ValueState.Error
              : ValueState.None
          }
          {...restField}
          {...props}
        />
      )}
    />
  );
};
