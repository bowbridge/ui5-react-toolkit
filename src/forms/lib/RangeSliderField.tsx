import React from 'react';
import { Controller } from 'react-hook-form';
import { RangeSlider, RangeSliderPropTypes } from '@ui5/webcomponents-react';

import { BaseFieldProps } from '../types/form/baseprops';

export interface RangeSliderFieldProps
  extends BaseFieldProps,
    RangeSliderPropTypes {}

export interface RangeSliderElement extends HTMLElement {
  startValue: number;
  endValue: number;
}

export const RangeSliderField = ({
  methods,
  fieldName,
  style,
  ...props
}: RangeSliderFieldProps) => {
  const innerStyle = {
    ...style,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field: { onChange, ...rest } }) => (
        <RangeSlider
          style={innerStyle}
          onChange={e => {
            const element = (e.target as unknown) as RangeSliderElement;
            const data = {
              startValue: element.startValue,
              endValue: element.endValue,
            };
            onChange(JSON.stringify(data));
          }}
          {...rest}
          {...props}
        />
      )}
    />
  );
};
