import React from 'react';

import { FieldType } from '../types/form/fieldmap';
import { RenderFieldProps } from '../types';
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

export const RenderField = (
  props: Omit<RenderFieldProps<FieldType>, 'labelProps'>
) => {
  const methods = useFormContext();

  const { fieldtype } = props;

  if (fieldtype === 'input') {
    const { fieldProps } = props as RenderFieldProps<'input'>;

    return (
      <>
        <InputField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'switch') {
    const { fieldProps } = props as RenderFieldProps<'switch'>;

    return (
      <>
        <SwitchField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'select') {
    const { fieldProps } = props as RenderFieldProps<'select'>;

    return (
      <>
        <SelectField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'checkbox') {
    const { fieldProps } = props as RenderFieldProps<'checkbox'>;

    return (
      <>
        <CheckBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'stepinput') {
    const { fieldProps } = props as RenderFieldProps<'stepinput'>;

    return (
      <>
        <StepInputField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'slider') {
    const { fieldProps } = props as RenderFieldProps<'slider'>;

    return (
      <>
        <SliderField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'textarea') {
    const { fieldProps } = props as RenderFieldProps<'textarea'>;

    return (
      <>
        <TextAreaField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'datepicker') {
    const { fieldProps } = props as RenderFieldProps<'datepicker'>;

    return (
      <>
        <DatePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'datetimepicker') {
    const { fieldProps } = props as RenderFieldProps<'datetimepicker'>;

    return (
      <>
        <DateTimePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'timepicker') {
    const { fieldProps } = props as RenderFieldProps<'timepicker'>;

    return (
      <>
        <TimePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'colorpicker') {
    const { fieldProps } = props as RenderFieldProps<'colorpicker'>;

    return (
      <>
        <ColorPickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'daterangepicker') {
    const { fieldProps } = props as RenderFieldProps<'daterangepicker'>;

    return (
      <>
        <DateRangePickerField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'ratingindicator') {
    const { fieldProps } = props as RenderFieldProps<'ratingindicator'>;

    return (
      <>
        <RatingIndicatorField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'rangeslider') {
    const { fieldProps } = props as RenderFieldProps<'rangeslider'>;

    return (
      <>
        <RangeSliderField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'radiobutton') {
    const { fieldProps } = props as RenderFieldProps<'radiobutton'>;

    return (
      <>
        <RadioButtonField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'combobox') {
    const { fieldProps } = props as RenderFieldProps<'combobox'>;

    return (
      <>
        <ComboBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  if (fieldtype === 'multicombobox') {
    const { fieldProps } = props as RenderFieldProps<'multicombobox'>;

    return (
      <>
        <MultiComboBoxField methods={methods} {...fieldProps} />
      </>
    );
  }

  return <></>;
};
