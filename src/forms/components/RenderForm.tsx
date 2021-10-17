import React from "react";
import { FormMetaType, RenderFormRef } from "../types";
import { ObjectSchema } from "yup";
import { forwardRef, useImperativeHandle, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RenderField } from "./RenderField";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

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
        <form>
          <FlexBox direction={FlexBoxDirection.Column}>
            {fields && fields.map((field, index) => (
              <div key={index}>
                <RenderField
                  labelProps={field.labelProps}
                  fieldtype={field.fieldtype}
                  fieldProps={field.fieldProps}
                />
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Button
                design={ButtonDesign.Negative}
                color="error"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                design={ButtonDesign.Emphasized}
                onClick={() => methods.reset()}
              >
                Reset
              </Button>
              <Button
                onClick={methods.handleSubmit(onSubmit)}
                design={ButtonDesign.Default}
              >
                {editMode ? "Update" : "Create"}
              </Button>
            </div>
          </FlexBox>
        </form>
      </FormProvider>
    );
  }
);
