import React, { Fragment } from 'react';
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
} from '@ui5/webcomponents-react';
import { FormPropTypes } from '@ui5/webcomponents-react/dist/Form';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export type RenderFormRef = {
  resetForm: () => void;
};
export interface RenderFormProps {
  metaData: FormMetaData;
  validationSchema?: ObjectSchema<any>;
  onSubmit: SubmitHandler<any>;
  editMode?: boolean;
  editModeContent?: any;
  onCancel?: () => void;
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
      onCancel,
      metaData: {
        formProps: { titleText, ...restFormProps },
        sections,
      },
    } = props;

    const methods = useForm({
      resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    });

    const { reset } = methods;

    useImperativeHandle(ref, () => ({
      resetForm() {
        console.log('Form Reseting...');
        reset();
      },
    }));

    /*     useEffect(() => {
      if (editMode && editModeContent) {
        fields.forEach((field) => {
          setValue(
            field.fieldProps.fieldName,
            editModeContent[field.fieldProps.fieldName]
          );
        });
      }
    }, [editMode, editModeContent, fields, setValue]); */

    return (
      <FormProvider {...methods}>
        <Form titleText={titleText} {...restFormProps}>
          {sections.map((section, index) => (
            <Fragment key={index}>
              {section.groupName ? (
                <FormGroup titleText={section.groupName}>
                  {section.fields && (
                    <FormItemContainer fields={section.fields} />
                  )}
                </FormGroup>
              ) : (
                <>
                  {section.fields && (
                    <FormItemContainer fields={section.fields} />
                  )}
                </>
              )}
            </Fragment>
          ))}
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

const FormItemContainer = ({
  fields,
}: {
  fields: FieldMetaDataType<any>[];
}) => {
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
