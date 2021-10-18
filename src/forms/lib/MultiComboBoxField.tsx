import React from 'react';
import {
  MultiComboBox,
  MultiComboBoxItem,
  ValueState,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { Controller } from 'react-hook-form';

import { MultiComboBoxPropTypes } from '@ui5/webcomponents-react/webComponents/MultiComboBox';
import { MultiComboBoxItemPropTypes } from '@ui5/webcomponents-react/webComponents/MultiComboBoxItem';
import { BaseFieldProps } from '../types/form/baseprops';
import { InputOptionsType } from '../types/form/options';

export interface MultiComboBoxFieldProps
  extends BaseFieldProps,
    MultiComboBoxPropTypes {
  options: InputOptionsType[];
  itemProps?: MultiComboBoxItemPropTypes;
}

export interface MultiComboBoxElement extends HTMLElement {
  text: string;
}

export const MultiComboBoxField = ({
  methods,
  style,
  fieldName,
  options,
  ...props
}: MultiComboBoxFieldProps) => {
  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
  };

  return (
    <Controller
      name={fieldName}
      control={methods.control}
      render={({ field }) => (
        <MultiComboBox
          style={innerStyle}
          onSelectionChange={(e) => {
            let elements = e.detail.items as MultiComboBoxElement[];
            let selectedItems: any = [];
            elements.forEach((element) => {
              let data = {
                item: element['text'],
              };
              selectedItems.push(data);
            });
            field.onChange(JSON.stringify(selectedItems));
          }}
          valueStateMessage={
            <span>
              {methods.formState.errors[fieldName]?.message
                ? methods.formState.errors[fieldName]?.message
                : ''}
            </span>
          }
          valueState={
            methods.formState.errors[fieldName]
              ? ValueState.Error
              : ValueState.None
          }
          {...props}
        >
          {options &&
            options.map((option, index) => (
              <MultiComboBoxItem key={index} text={option.text} />
            ))}
        </MultiComboBox>
      )}
    />
  );
};
