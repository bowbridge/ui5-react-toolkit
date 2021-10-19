import React, { useEffect, useState } from 'react';
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
  BusyIndicator,
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
  inProgress?: boolean;
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
      metaData: {
        formProps: { titleText, ...restFormProps },
        sections,
      },
    } = props;

    const [showBusyIndicator, setShowBusyIndicator] = useState(false);

    const methods = useForm({
      resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    });

    const { setValue } = methods;

    useImperativeHandle(ref, () => ({
      resetForm() {
        console.log('Form Reseting...');
        setShowBusyIndicator(false);
        // reset();
      },
      submit() {
        console.log('triggered By Parent');
        setShowBusyIndicator(true);
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
      setShowBusyIndicator(true);
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
        <Toolbar toolbarStyle={ToolbarStyle.Clear}>
          <ToolbarSpacer />
          <BusyIndicator active={showBusyIndicator}>
            <Button onClick={formSubmitHandler}>
              {editMode ? 'Update' : 'Create'}
            </Button>
          </BusyIndicator>
          <Button design={ButtonDesign.Transparent} onClick={onCancel}>
            Cancel
          </Button>
        </Toolbar>
      </FormProvider>
    );
  }
);
