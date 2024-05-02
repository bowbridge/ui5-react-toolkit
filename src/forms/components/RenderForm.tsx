import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  ButtonDesign,
  Form,
  FormGroup,
  FormItem,
  FormPropTypes,
  Label,
  Loader,
  Toolbar,
  ToolbarSpacer,
  ToolbarStyle,
} from '@ui5/webcomponents-react';
import { ObjectSchema } from 'yup';

import { RenderField } from './RenderField';
import { FieldMetaDataType } from '../types/form/fieldmap';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export type RenderFormRef = {
  resetForm: () => void;
  submit: () => void;
  setValue: (fieldName: string, value: any) => void;
};
export interface RenderFormProps {
  metaData: FormMetaData;
  validationSchema?: ObjectSchema<any>;
  onSubmit: SubmitHandler<any>;
  editMode?: boolean;
  editModeContent?: any;
  onCancel?: () => void;
  hideToolbar?: boolean;
  submitButtonText?: string;
  showLoader?: boolean;
}

export function createFormMetaData<T>(
  metaData: FormMetaData<T>
): FormMetaData<T> {
  return metaData;
}

export interface FormMetaData<F = any> {
  formProps: Omit<FormPropTypes, 'children'>;
  sections: {
    groupName?: string;
    fields: FieldMetaDataType<F>[];
  }[];
}

export const RenderForm = forwardRef<RenderFormRef, RenderFormProps>(
  (props, ref) => {
    const {
      validationSchema,
      onSubmit,
      editMode,
      editModeContent,
      onCancel,
      hideToolbar,
      submitButtonText,
      showLoader,
      metaData: {
        formProps: { titleText, ...restFormProps },
        sections,
      },
    } = props;

    const defaultValues = sections.reduce(
      (result: { [p: string]: any }, currentValue) => {
        const { fields } = currentValue;
        for (const field of fields) {
          const {
            fieldProps: { fieldName, defaultValue },
          } = field;
          result[fieldName] = defaultValue;
        }

        return result;
      },
      {}
    );

    const methods = useForm({
      ...(validationSchema && { resolver: yupResolver(validationSchema) }),
      defaultValues,
    });

    const { setValue, reset } = methods;

    useImperativeHandle(ref, () => ({
      resetForm() {
        reset(defaultValues);
      },
      submit() {
        methods.handleSubmit(onSubmit)();
      },
      setValue(fieldName: string, value: any) {
        setValue(fieldName, value);
      },
    }));

    useEffect(() => {
      if (editMode && editModeContent) {
        sections.forEach(section => {
          section.fields.forEach(field => {
            setValue(
              field.fieldProps.fieldName,
              editModeContent[field.fieldProps.fieldName],
              {}
            );
          });
        });
      }
    }, [editMode, editModeContent, sections, setValue]);

    const formSubmitHandler = () => {
      methods.handleSubmit(onSubmit)();
    };

    return (
      <FormProvider {...methods}>
        <Form
          titleText={titleText}
          {...restFormProps}
          onSubmit={e => e.preventDefault()}
        >
          {sections.map((section, index) => (
            <FormGroup
              key={index}
              titleText={section.groupName ? section.groupName : ''}
            >
              {section.fields.map((field, index) => {
                const { fieldLabel, ...labelProps } = field.labelProps;

                return (
                  <FormItem
                    key={index}
                    label={<Label {...labelProps}>{fieldLabel}</Label>}
                  >
                    <RenderField
                      fieldtype={field.fieldtype}
                      fieldProps={field.fieldProps}
                    />
                  </FormItem>
                );
              })}
            </FormGroup>
          ))}
        </Form>
        {!hideToolbar && (
          <>
            <div style={{ height: '1rem' }}>{showLoader && <Loader />}</div>
            <Toolbar toolbarStyle={ToolbarStyle.Clear}>
              <ToolbarSpacer />
              <Button onClick={formSubmitHandler}>
                {submitButtonText
                  ? submitButtonText
                  : editMode
                  ? 'Update'
                  : 'Create'}
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={onCancel}>
                Cancel
              </Button>
            </Toolbar>
          </>
        )}
      </FormProvider>
    );
  }
);
