import React from 'react';
import { Form, FormGroup, FormItem, Label } from '@ui5/webcomponents-react';
import { FormProvider, useForm } from 'react-hook-form';
import { RenderField } from '..';

export const RenderFormComponent = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form titleText="Test Form">
        <FormItem label="Sole Form Item">
          <RenderField fieldtype="input" fieldProps={{ fieldName: 'test' }} />
        </FormItem>
        <FormGroup titleText="Personal Data">
          <FormItem label="Name">
            <RenderField fieldtype="input" fieldProps={{ fieldName: 'name' }} />
          </FormItem>
          <FormItem label={<Label>Address</Label>}>
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'address' }}
            />
          </FormItem>
          <FormItem label="Country">
            <RenderField
              fieldtype="select"
              fieldProps={{
                fieldName: 'country',
                options: [
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
              }}
            />
          </FormItem>
          <FormItem label="Additional Comment">
            <RenderField
              fieldtype="textarea"
              fieldProps={{
                fieldName: 'comment',
                rows: 5,
                style: {
                  width: '210px',
                },
              }}
            />
          </FormItem>
          <FormItem label="Home address">
            <RenderField
              fieldtype="checkbox"
              fieldProps={{ fieldName: 'homeAddress', checked: true }}
            />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Company Data">
          <FormItem label="Company Name">
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'companyName' }}
            />
          </FormItem>
          <FormItem label="Company Address">
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'companyAddress' }}
            />
          </FormItem>
          <FormItem label="Company City">
            <RenderField fieldtype="input" fieldProps={{ fieldName: 'city' }} />
          </FormItem>
          <FormItem label="Company Country">
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'country' }}
            />
          </FormItem>
          <FormItem label="Number of Employees">
            <RenderField
              fieldtype="input"
              fieldProps={{
                fieldName: 'employees',
                value: 5000,
                type: 'Number',
                disabled: true,
              }}
            />
          </FormItem>
          <FormItem label="Member of Partner Network">
            <RenderField
              fieldtype="checkbox"
              fieldProps={{ fieldName: 'member', checked: true }}
            />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Marketing Data">
          <FormItem label="Email">
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'email', type: 'Email' }}
            />
          </FormItem>
          <FormItem label="Company Email">
            <RenderField
              fieldtype="input"
              fieldProps={{ fieldName: 'companyEmail', type: 'Email' }}
            />
          </FormItem>
          <FormItem label="I want to receive the newsletter">
            <RenderField
              fieldtype="checkbox"
              fieldProps={{ fieldName: 'subscribe' }}
            />
          </FormItem>
        </FormGroup>
      </Form>
    </FormProvider>
  );
};
