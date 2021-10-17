import React from 'react';
import { Controller } from 'react-hook-form';
import { Slider } from '@ui5/webcomponents-react';
import { SliderPropTypes } from '@ui5/webcomponents-react/webComponents/Slider';
import { BaseFieldProps } from '../types/form/baseprops';

export interface SliderFieldProps extends BaseFieldProps, SliderPropTypes {}

export const SliderField = ({
  methods,
  fieldName,
  style,
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
