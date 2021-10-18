import { ColorPicker } from '@ui5/webcomponents-react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ColorPickerPropTypes } from '@ui5/webcomponents-react/webComponents/ColorPicker';
import { BaseFieldProps } from '../types/form/baseprops';

export interface ColorPickerFieldProps
  extends BaseFieldProps,
    ColorPickerPropTypes {}

interface ColorPickerElement extends HTMLElement {
  color: string;
}

export const ColorPickerField = ({
  methods,
  fieldName,
  style,
  ...props
}: ColorPickerFieldProps) => {
  const innerStyle = {
    ...style,
  };
  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <ColorPicker
          style={innerStyle}
          onChange={(e) => {
            const element = e.target as ColorPickerElement;
            field.onChange(element['color']);
          }}
          {...props}
        />
      )}
    />
  );
};
