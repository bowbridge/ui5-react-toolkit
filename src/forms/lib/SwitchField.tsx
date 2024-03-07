import React from 'react';
import { Controller } from 'react-hook-form';
import { Switch, SwitchPropTypes } from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface SwitchFieldProps extends BaseFieldProps, SwitchPropTypes {
  initialValue: boolean;
}

export const SwitchField = ({
  fieldName,
  methods,
  initialValue,
  ...props
}: SwitchFieldProps) => {
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={initialValue}
      render={({ field }) => (
        <Switch
          onChange={e => field.onChange(e.target.checked)}
          checked={field.value}
          {...props}
        />
      )}
    />
  );
};
