import { RangeSlider } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import React from 'react';
import { Controller } from 'react-hook-form';
import { RangeSliderPropTypes } from '@ui5/webcomponents-react/webComponents/RangeSlider';
import { BaseFieldProps } from '../types/form/baseprops';

export interface RangeSliderFieldProps
  extends BaseFieldProps,
    RangeSliderPropTypes {}

export const RangeSliderField = ({
  methods,
  fieldName,
  style,
  ...props
}: RangeSliderFieldProps) => {
  const innerStyle = {
    ...style,
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field: { onChange, ...rest } }) => (
        <RangeSlider
          style={innerStyle}
          onChange={(e) => {
            console.log(e);
            /*  let startValue = e.target.attributes.startValue.value as unknown as unknown as string
            let endValue = e.target.attributes.endValue.value as string
            const data = {
              startValue,
              endValue
            };
            onChange(JSON.stringify(data)); */
          }}
          {...rest}
          {...props}
        />
      )}
    />
  );
};
