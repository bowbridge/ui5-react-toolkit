import React from 'react';
import { Controller } from 'react-hook-form';
import { Slider, SliderPropTypes } from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface SliderFieldProps extends BaseFieldProps, SliderPropTypes {}

export const SliderField = ({
  methods,
  fieldName,
  ...props
}: SliderFieldProps) => {
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => <Slider {...field} {...props} />}
    />
  );
};
