import React from 'react';
import { Controller } from 'react-hook-form';
import { Switch } from '@ui5/webcomponents-react';

import { SwitchPropTypes } from '@ui5/webcomponents-react/webComponents/Switch';
import { BaseFieldProps } from '../types/form/baseprops';

export interface SwitchFieldProps extends BaseFieldProps, SwitchPropTypes {
  intitialValue: boolean;
}

export const SwitchField = ({
  fieldName,
  methods,
  intitialValue,
  ...props
}: SwitchFieldProps) => {
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      defaultValue={intitialValue}
      render={({ field }) => (
        <Switch
          onChange={(e) => field.onChange(e.target.checked)}
          checked={field.value}
          {...props}
        />
      )}
    />
  );
};
