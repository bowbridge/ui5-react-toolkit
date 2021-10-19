import React, { useRef } from 'react';
import { SchemaOf, string, object, number } from 'yup';
import {
  RenderForm,
  createFormMetaData,
  RenderFormRef,
} from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@ui5/webcomponents-react';

type Person = {
  firstname: string;
  age: number;
  /*  lastname: string;
  color: string;
  active: boolean;
  email: string;
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
  age: number()
    .typeError('Please Enter the Age')
    .required('Age must be a number')
    .positive(),
  /*  lastname: string().required("Please Enter LastName"),
  color: string().required('Please Choose the Color'),
  email: string().email().required("Please Provide the Email"),
    count: number().typeError('Please Enter the Count').required(),
    active: boolean(),
    schoolId: string().required("Select Field Required"), */
});

type School = {
  name: string;
  city: string;
};

const data: Person & School = {
  name: 'Nehru',
  city: 'Madurai',
  firstname: 'Karthikeyan',
  age: 40,
};

const metaDataFromFunction = createFormMetaData<Person & School>({
  formProps: {
    titleText: 'Haiyo Haiyo',
  },
  sections: [
    {
      groupName: 'Person Information',
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Firstname',
            required: true,
          },
          fieldProps: {
            fieldName: 'firstname',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Age',
            required: true,
          },
          fieldProps: {
            fieldName: 'age',
            type: 'Number',
          },
        },
      ],
    },
    {
      groupName: 'School Information',
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'School Name',
          },
          fieldProps: {
            fieldName: 'name',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'City',
          },
          fieldProps: {
            fieldName: 'city',
          },
        },
      ],
    },
  ],
});

export const PersonForm = () => {
  const renderFormRef = useRef<RenderFormRef>(null);

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log('parenthit');
    console.log(data);
    setTimeout(() => {
      formResetHandler();
    }, 2500);
  };

  const formResetHandler = () => {
    renderFormRef.current?.resetForm();
  };

  return (
    <>
      <RenderForm
        editMode={true}
        editModeContent={data}
        ref={renderFormRef}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        metaData={metaDataFromFunction}
        inProgress={true}
      />

      <Button onClick={() => renderFormRef.current?.submit()}>
        Parent Submit
      </Button>
    </>
  );
};
