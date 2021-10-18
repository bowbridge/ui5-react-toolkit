import React from 'react';
import { FormMetaType, RenderFormRef } from '../types';
import { ObjectSchema } from 'yup';
import { forwardRef, useImperativeHandle, useEffect } from 'react';
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
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export interface RenderFormProps {
  fields: FormMetaType<any>;
  validationSchema?: ObjectSchema<any>;
  onSubmit: SubmitHandler<any>;
  editMode?: boolean;
  editModeContent?: any;
  onCancel?: () => void;
}

export const RenderForm = forwardRef<RenderFormRef, RenderFormProps>(
  (props, ref) => {
    const {
      fields,
      validationSchema,
      onSubmit,
      editMode,
      editModeContent,
      onCancel,
    } = props;

    const methods = useForm({
      resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    });

    const { reset, setValue } = methods;

    useImperativeHandle(ref, () => ({
      resetForm() {
        console.log('Form Reseting...');
        reset();
      },
    }));

    useEffect(() => {
      if (editMode && editModeContent) {
        fields.forEach((field) => {
          setValue(
            field.fieldProps.fieldName,
            editModeContent[field.fieldProps.fieldName]
          );
        });
      }
    }, [editMode, editModeContent, fields, setValue]);

    return (
      <FormProvider {...methods}>
        <Form titleText="Test Form">
          <FormGroup titleText="Personal Data">
            {fields && <FormItemContainer fields={fields} />}
          </FormGroup>
        </Form>
        <Toolbar toolbarStyle={ToolbarStyle.Clear}>
          <ToolbarSpacer />
          <Button onClick={methods.handleSubmit(onSubmit)}>
            {editMode ? 'Update' : 'Create'}
          </Button>
          <Button design={ButtonDesign.Transparent} onClick={onCancel}>
            Cancel
          </Button>
        </Toolbar>
      </FormProvider>
    );
  }
);

const FormItemContainer = ({ fields }: { fields: FormMetaType<any> }) => {
  return (
    <>
      {fields.map((field, index) => {
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
    </>
  );
};
