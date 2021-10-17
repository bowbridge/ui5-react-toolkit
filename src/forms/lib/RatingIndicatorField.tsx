import React from 'react';
import { spacing } from '@ui5/webcomponents-react-base';
import { Controller } from 'react-hook-form';
import { RatingIndicator } from '@ui5/webcomponents-react';
import { RatingIndicatorPropTypes } from '@ui5/webcomponents-react/webComponents/RatingIndicator';
import { BaseFieldProps } from '../types/form/baseprops';

export interface RatingIndicatorFieldProps
  extends BaseFieldProps,
    RatingIndicatorPropTypes {}

export const RatingIndicatorField = ({
  methods,
  fieldName,
  style,
  ...props
}: RatingIndicatorFieldProps) => {
  const innerStyle = {
    ...style,
    width: '100%',
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <RatingIndicator style={innerStyle} {...field} {...props} />
      )}
    />
  );
};
