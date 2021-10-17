import { LabelPropTypes } from '@ui5/webcomponents-react/dist/Label';
import { BaseFieldProps } from './form/baseprops';

import { CheckBoxFieldProps } from '../lib/CheckBoxField';
import { ColorPickerFieldProps } from '../lib/ColorPickerField';
import { ComboBoxFieldProps } from '../lib/ComboBoxField';
import { DatePickerFieldProps } from '../lib/DatePickerField';
import { DateRangePickerFieldProps } from '../lib/DateRangePickerField';
import { DateTimePickerFieldProps } from '../lib/DateTimePickerField';
import { InputFieldProps } from '../lib/InputField';
import { MultiComboBoxFieldProps } from '../lib/MultiComboBoxField';
import { RadioButtonFieldProps } from '../lib/RadioButtonField';
import { RangeSliderFieldProps } from '../lib/RangeSliderField';
import { RatingIndicatorFieldProps } from '../lib/RatingIndicatorField';
import { SelectFieldProps } from '../lib/SelectField';
import { SliderFieldProps } from '../lib/SliderField';
import { StepInputFieldProps } from '../lib/StepInputField';
import { SwitchFieldProps } from '../lib/SwitchField';
import { TextAreaFieldProps } from '../lib/TextAreaField';
import { TimePickeFieldProps } from '../lib/TimePickerField';

export interface FieldLabelProps extends LabelPropTypes {
  labelName: string;
}

type FieldPropsMap = {
  input: Omit<InputFieldProps, keyof BaseFieldProps>;
  switch: Omit<SwitchFieldProps, keyof BaseFieldProps>;
  select: Omit<SelectFieldProps, keyof BaseFieldProps>;
  checkbox: Omit<CheckBoxFieldProps, keyof BaseFieldProps>;
  stepinput: Omit<StepInputFieldProps, keyof BaseFieldProps>;
  slider: Omit<SliderFieldProps, keyof BaseFieldProps>;
  textarea: Omit<TextAreaFieldProps, keyof BaseFieldProps>;
  datepicker: Omit<DatePickerFieldProps, keyof BaseFieldProps>;
  timepicker: Omit<TimePickeFieldProps, keyof BaseFieldProps>;
  colorpicker: Omit<ColorPickerFieldProps, keyof BaseFieldProps>;
  datetimepicker: Omit<DateTimePickerFieldProps, keyof BaseFieldProps>;
  daterangepicker: Omit<DateRangePickerFieldProps, keyof BaseFieldProps>;
  ratingindicator: Omit<RatingIndicatorFieldProps, keyof BaseFieldProps>;
  rangeslider: Omit<RangeSliderFieldProps, keyof BaseFieldProps>;
  radiobutton: Omit<RadioButtonFieldProps, keyof BaseFieldProps>;
  combobox: Omit<ComboBoxFieldProps, keyof BaseFieldProps>;
  multicombobox: Omit<MultiComboBoxFieldProps, keyof BaseFieldProps>;
};

export type FieldType = keyof FieldPropsMap;

type BaseFieldPropsWithoutMethod<T> = Omit<BaseFieldProps<T>, 'methods'>;

export interface RenderFiledProps<T extends FieldType, S = any> {
  fieldtype: T;
  labelProps?: FieldLabelProps; // this property can be deleted
  fieldProps: FieldPropsMap[T] & BaseFieldPropsWithoutMethod<keyof S>;
}

export type FormMetaType<S> = RenderFiledProps<FieldType, S>[];

export type RenderFormRef = {
  resetForm: () => void;
};
