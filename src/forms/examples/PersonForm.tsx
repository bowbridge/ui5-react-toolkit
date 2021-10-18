import React, { useRef } from 'react';
import { FormMetaType, RenderFormRef } from '../types';
import { SchemaOf, string, object, number, boolean } from 'yup';
import { RenderForm } from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';

type Person = {
  firstname: string;
  /*  lastname: string;
  color: string;
  active: boolean;
  email: string;
  age: number;
  count: number;
  schoolId: string; */
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
  color: string().required('Please Choose the Color'),
  email: string().email().required("Please Provide the Email"),
  age: number()
    .typeError("Please Enter the Age")
    .required("Age must be a number")
    .positive(),
    count: number().typeError('Please Enter the Count').required(),
    active: boolean().required(),
    schoolId: string().required("Select Field Required"), */
});

/* 
MultiInput
 */

export const fields: FormMetaType<Person> = [
  {
    fieldtype: 'timepicker',
    labelProps: {
      fieldLabel: 'Firstname',
    },
    fieldProps: {
      fieldName: 'firstname',
      showTickmarks: true,
      style: {
        width: '210px',
      },
    },
  },
  /*   {
    fieldtype: 'slider',
    labelProps: {
      fieldLabel: 'Count',
    },
    fieldProps: {
      fieldName: 'count',
      style: {
        width: '210px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },
  },
  {
    fieldtype: 'checkbox',
    labelProps: {
      fieldLabel: 'Active',
    },
    fieldProps: {
      fieldName: 'active',
    },
  },
  {
    fieldtype: 'datepicker',
    labelProps: {
      fieldLabel: 'Color',
    },
    fieldProps: {
      fieldName: 'color',
    },
  }, */
];

export const PersonForm = () => {
  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data);
    formResetHandler();
  };

  const formResetHandler = (): void => {
    renderFormRef.current?.resetForm();
  };

  const renderFormRef = useRef<RenderFormRef>(null);
  return (
    <>
      <RenderForm
        editMode={false}
        ref={renderFormRef}
        fields={fields}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      />
    </>
  );
};

/*
v2
Calendar
FileUploader
*/
