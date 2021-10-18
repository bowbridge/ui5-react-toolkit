import { LabelPropTypes } from '@ui5/webcomponents-react/dist/Label';
import { BaseFieldPropsWithoutMethod } from './form/baseprops';
import { FieldType, FieldPropsMap } from './form/fieldmap';

export interface FieldLabelProps extends LabelPropTypes {
  fieldLabel: string;
}

export interface RenderFieldProps<T extends FieldType, S = any> {
  fieldtype: T;
  labelProps: FieldLabelProps;
  fieldProps: FieldPropsMap[T] & BaseFieldPropsWithoutMethod<keyof S>;
}

export type FormMetaType<S> = RenderFieldProps<FieldType, S>[];

export type RenderFormRef = {
  resetForm: () => void;
};
