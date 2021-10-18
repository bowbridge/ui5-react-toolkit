import { UseFormReturn } from 'react-hook-form';

export interface BaseFieldProps<T = void> {
  fieldName: T extends string ? T : string;
  methods: UseFormReturn;
}

export type BaseFieldPropsWithoutMethod<T> = Omit<BaseFieldProps<T>, 'methods'>;
