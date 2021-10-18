import React, { useRef } from 'react';
import { FormMetaType, RenderFormRef } from '../types';
import { SchemaOf, string, object, number, boolean } from 'yup';
import { RenderForm } from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from '@ui5/webcomponents-react';

type Person = {
  firstname: string;
  active: boolean;
  /*  lastname: string;
  email: string;
  age: number;
  schoolId: string; */
  count: number;
};

/* const person: Person = {
  firstname: "Aaron",
  lastname: "Mariappan",
  email: "raja@gmail.com",
  age: 40,
  active: false,
  schoolId: "",
  count: 0,
}; */

const validationSchema: SchemaOf<Person> = object({
  firstname: string().required('Please Enter FirstName'),
  /*  lastname: string().required("Please Enter LastName"),
  email: string().email().required("Please Provide the Email"),
  age: number()
    .typeError("Please Enter the Age")
    .required("Age must be a number")
    .positive(),
    schoolId: string().required("Select Field Required"), */
  count: number().typeError('Please Enter the Count').required(),
  active: boolean().required(),
});

/* 
MultiInput
 */

export const fields: FormMetaType<Person> = [
  {
    fieldtype: 'multicombobox',
    fieldProps: {
      fieldName: 'firstname',
      options: [
        {
          text: 'India',
        },
        { text: 'Germany' },
        { text: 'France' },
        { text: 'Belgium' },
        { text: 'Italy' },
        { text: 'Sweden' },
        { text: 'Norway' },
      ],
    },
  },
  /* 
  {
    fieldtype: "input",
    labelProps: {
      labelName: "Lastname",
      required: true,
    },
    fieldProps: {
      fieldName: "lastname",
    },
  },
    {
    fieldtype: "input",
    labelProps: {
      labelName: "Email",
      required: true,
    },
    fieldProps: {
      fieldName: "email",
    },
  }, 
  {
    fieldtype: "input",
    labelProps: {
      labelName: "Age",
      required: true,
    },
    fieldProps: {
      fieldName: "age",
    },
  },
    {
    fieldtype: "select",
    labelProps: {
      labelName: "School",
    },
    fieldProps: {
      fieldName: "schoolId",
      options: [
        {
          value: "pre",
          label: "Pre School",
        },
        {
          value: "sec",
          label: "Secondary School",
        },
        {
          value: "high",
          label: "Higher Secondary School",
        },
      ],
    },
  }, */
  {
    fieldtype: 'switch',
    fieldProps: {
      fieldName: 'active',
      style: {
        width: '50px',
      },
    },
  },
  {
    fieldtype: 'slider',
    fieldProps: {
      fieldName: 'count',
      step: 10,
    },
  },
];

export const PersonForm = () => {
  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data);
    //renderFormRef.current?.resetForm();
  };

  const renderFormRef = useRef<RenderFormRef>(null);
  return (
    <FlexBox
      fitContainer
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <FlexBox style={{ width: '200px' }}>
        <RenderForm
          editMode={false}
          ref={renderFormRef}
          fields={fields}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </FlexBox>
    </FlexBox>
  );
};

/*
v2
Calendar
FileUploader
*/
