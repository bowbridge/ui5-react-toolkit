import React from 'react';

import { RenderFiledProps, FieldType } from '../types';
import { useFormContext } from 'react-hook-form';

import { InputField } from '../lib/InputField';
import { SwitchField } from '../lib/SwitchField';
import { SelectField } from '../lib/SelectField';
import { CheckBoxField } from '../lib/CheckBoxField';
import { StepInputField } from '../lib/StepInputField';
import { SliderField } from '../lib/SliderField';
import { TextAreaField } from '../lib/TextAreaField';
import { DatePickerField } from '../lib/DatePickerField';
import { DateTimePickerField } from '../lib/DateTimePickerField';
import { TimePickerField } from '../lib/TimePickerField';
import { ColorPickerField } from '../lib/ColorPickerField';
import { DateRangePickerField } from '../lib/DateRangePickerField';
import { RatingIndicatorField } from '../lib/RatingIndicatorField';
import { RangeSliderField } from '../lib/RangeSliderField';
import { RadioButtonField } from '../lib/RadioButtonField';
import { ComboBoxField } from '../lib/ComboBoxField';
import { MultiComboBoxField } from '../lib/MultiComboBoxField';

export const RenderField = (props: RenderFiledProps<FieldType>) => {
  const methods = useFormContext();

  const { fieldtype } = props;

  if (fieldtype === 'input') {
    const { fieldProps } = props as RenderFiledProps<'input'>;

    return (
      <>
        <InputField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'switch') {
    const { fieldProps } = props as RenderFiledProps<'switch'>;

    return (
      <>
        <SwitchField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'select') {
    const { fieldProps } = props as RenderFiledProps<'select'>;

    return (
      <>
        <SelectField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'checkbox') {
    const { fieldProps } = props as RenderFiledProps<'checkbox'>;

    return (
      <>
        <CheckBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'stepinput') {
    const { fieldProps } = props as RenderFiledProps<'stepinput'>;

    return (
      <>
        <StepInputField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'slider') {
    const { fieldProps } = props as RenderFiledProps<'slider'>;

    return (
      <>
        <SliderField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'textarea') {
    const { fieldProps } = props as RenderFiledProps<'textarea'>;

    return (
      <>
        <TextAreaField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'datepicker') {
    const { fieldProps } = props as RenderFiledProps<'datepicker'>;

    return (
      <>
        <DatePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'datetimepicker') {
    const { fieldProps } = props as RenderFiledProps<'datetimepicker'>;

    return (
      <>
        <DateTimePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'timepicker') {
    const { fieldProps } = props as RenderFiledProps<'timepicker'>;

    return (
      <>
        <TimePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'colorpicker') {
    const { fieldProps } = props as RenderFiledProps<'colorpicker'>;

    return (
      <>
        <ColorPickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'daterangepicker') {
    const { fieldProps } = props as RenderFiledProps<'daterangepicker'>;

    return (
      <>
        <DateRangePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'ratingindicator') {
    const { fieldProps } = props as RenderFiledProps<'ratingindicator'>;

    return (
      <>
        <RatingIndicatorField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'rangeslider') {
    const { fieldProps } = props as RenderFiledProps<'rangeslider'>;

    return (
      <>
        <RangeSliderField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'radiobutton') {
    const { fieldProps } = props as RenderFiledProps<'radiobutton'>;

    return (
      <>
        <RadioButtonField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'combobox') {
    const { fieldProps } = props as RenderFiledProps<'combobox'>;

    return (
      <>
        <ComboBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'multicombobox') {
    const { fieldProps } = props as RenderFiledProps<'multicombobox'>;

    return (
      <>
        <MultiComboBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  return <></>;
};
