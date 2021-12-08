import React from 'react';
import {
  MultiComboBox,
  MultiComboBoxItem,
  ValueState,
} from '@ui5/webcomponents-react';
import { Controller } from 'react-hook-form';

import { MultiComboBoxPropTypes } from '@ui5/webcomponents-react/webComponents/MultiComboBox';
import { MultiComboBoxItemPropTypes } from '@ui5/webcomponents-react/webComponents/MultiComboBoxItem';
import { BaseFieldProps } from '../types/form/baseprops';

export interface MultiComboBoxFieldProps
  extends BaseFieldProps,
    MultiComboBoxPropTypes {
  optionsData: any[];
  optionValueKey: string;
  itemProps?: MultiComboBoxItemPropTypes;
}

export interface MultiComboBoxElement extends HTMLElement {
  text: string;
}

export const MultiComboBoxField = ({
  methods,
  style,
  fieldName,
  optionsData,
  optionValueKey,
  ...props
}: MultiComboBoxFieldProps) => {
  const innerStyle = {
    ...style,
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
          {optionsData &&
            optionsData.map((option, index) => (
              <MultiComboBoxItem key={index} text={option[optionValueKey]} />
            ))}
        </MultiComboBox>
      )}
    />
  );
};
