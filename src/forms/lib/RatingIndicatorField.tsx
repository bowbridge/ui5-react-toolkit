import React from 'react';
import { Controller } from 'react-hook-form';
import {
  RatingIndicator,
  RatingIndicatorPropTypes,
} from '@ui5/webcomponents-react';

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
