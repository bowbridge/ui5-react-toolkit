import React, { useEffect } from 'react';
import { FieldMetaDataType } from '../types/form/fieldmap';
import { ObjectSchema } from 'yup';
import { forwardRef, useImperativeHandle } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { RenderField } from './RenderField';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  ButtonDesign,
  Form,
  Toolbar,
  ToolbarSpacer,
  ToolbarStyle,
  FormItem,
  Label,
  FormGroup,
  Loader,
} from '@ui5/webcomponents-react';
import { FormPropTypes } from '@ui5/webcomponents-react/dist/Form';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export type RenderFormRef = {
  resetForm: () => void;
  submit: () => void;
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

    const methods = useForm({
      resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    });

    const { setValue, reset } = methods;

    useImperativeHandle(ref, () => ({
      resetForm() {
        reset();
      },
      submit() {
        methods.handleSubmit(onSubmit)();
      },
    }));

    useEffect(() => {
      if (editMode && editModeContent) {
        sections.forEach((section) => {
          section.fields.forEach((field) => {
            setValue(
              field.fieldProps.fieldName,
              editModeContent[field.fieldProps.fieldName]
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
        <Form titleText={titleText} {...restFormProps}>
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
