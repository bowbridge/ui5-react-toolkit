import { object, ObjectSchema, string } from 'yup';

import { createFormMetaData } from '../components/RenderForm';

type Misc = {
  soleItem: string;
};

type PersonalData = {
  name: string;
  address: string;
  country: string;
  comment: string;
  isHomeAddress: boolean;
};

type CompanyData = {
  companyName: string;
  companyAddress: string;
  companyCity: string;
  companyCountry: string;
  employeeQty: number;
  isPartner: boolean;
};

type MarketingData = {
  email: string;
  password: string;
  companyEmail: string;
  subscription: boolean;
};

export type MixedType = PersonalData & CompanyData & MarketingData & Misc;

export const validationSchema: ObjectSchema<Pick<
  MixedType,
  'name' | 'email' | 'country'
>> = object({
  name: string().required('Name Required'),
  email: string()
    .email()
    .required('Email Required'),
  country: string().required('Required Field'),
});

export const formMetaData = createFormMetaData<MixedType>({
  formProps: {
    titleText: 'Test Form',
  },
  sections: [
    {
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Sole Form Item',
          },
          fieldProps: {
            fieldName: 'soleItem',
          },
        },
      ],
    },
    {
      groupName: 'Personal Data',
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Name',
            required: true,
          },
          fieldProps: {
            fieldName: 'name',
            defaultValue: '',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Address',
          },
          fieldProps: {
            fieldName: 'address',
          },
        },
        {
          fieldtype: 'select',
          labelProps: {
            fieldLabel: 'Country',
            required: true,
          },
          fieldProps: {
            disabled: true,
            defaultValue: 'germany',
            fieldName: 'country',
            optionValueKey: 'value',
            optionLabelKey: 'label',
            optionSelectedValue: 'germany',
            optionsData: [
              {
                label: 'Select a country',
                value: '',
              },
              {
                label: 'Germany',
                value: 'germany',
              },
              {
                label: 'France',
                value: 'france',
              },
              {
                label: 'Italy',
                value: 'italy',
              },
            ],
          },
        },
        {
          fieldtype: 'textarea',
          labelProps: {
            fieldLabel: 'Additional Comment',
          },
          fieldProps: {
            fieldName: 'comment',
            style: {
              width: '210px',
            },
          },
        },
        {
          fieldtype: 'checkbox',
          labelProps: {
            fieldLabel: 'Home address',
          },
          fieldProps: {
            fieldName: 'isHomeAddress',
            checked: true,
          },
        },
      ],
    },
    {
      groupName: 'Company Data',
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Company Name',
          },
          fieldProps: {
            fieldName: 'companyName',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Company Address',
          },
          fieldProps: {
            fieldName: 'companyAddress',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Company City',
          },
          fieldProps: {
            fieldName: 'companyCity',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Company Country',
          },
          fieldProps: {
            fieldName: 'companyCountry',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Number of Employees',
          },
          fieldProps: {
            fieldName: 'employeeQty',
            value: '5000',
            type: 'Number',
            disabled: true,
          },
        },
        {
          fieldtype: 'checkbox',
          labelProps: {
            fieldLabel: 'Member of Partner Network',
          },
          fieldProps: {
            fieldName: 'isPartner',
            checked: true,
          },
        },
      ],
    },
    {
      groupName: 'Marketing Data',
      fields: [
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Email',
            required: true,
          },
          fieldProps: {
            fieldName: 'email',
            type: 'Email',
            defaultValue: '',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Password',
            required: true,
          },
          fieldProps: {
            fieldName: 'password',
            type: 'Password',
            defaultValue: '',
          },
        },
        {
          fieldtype: 'input',
          labelProps: {
            fieldLabel: 'Company Email',
          },
          fieldProps: {
            fieldName: 'companyEmail',
            type: 'Email',
          },
        },
        {
          fieldtype: 'checkbox',
          labelProps: {
            fieldLabel: 'I want to receive the newsletter',
          },
          fieldProps: {
            fieldName: 'subscription',
          },
        },
      ],
    },
  ],
});
