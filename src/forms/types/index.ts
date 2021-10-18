import { LabelPropTypes } from '@ui5/webcomponents-react/dist/Label';
import { BaseFieldPropsWithoutMethod } from './form/baseprops';
import { FieldType, FieldPropsMap } from './form/fieldmap';

export interface FieldLabelProps extends LabelPropTypes {
  labelName: string;
}

export interface RenderFiledProps<T extends FieldType, S = any> {
  fieldtype: T;
  labelProps?: FieldLabelProps; // this property can be deleted
  fieldProps: FieldPropsMap[T] & BaseFieldPropsWithoutMethod<keyof S>;
}

export type FormMetaType<S> = RenderFiledProps<FieldType, S>[];

export type RenderFormRef = {
  resetForm: () => void;
};
