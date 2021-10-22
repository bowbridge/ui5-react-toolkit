import React, { useRef } from 'react';
import { validationSchema, formMetaData, MixedType } from './meta';
import { RenderForm, RenderFormRef } from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';

export const TestForm = () => {
  const renderFormRef = useRef<RenderFormRef>(null);

  const onSubmit: SubmitHandler<MixedType> = (data) => {
    console.log(data);
    setTimeout(() => {
      formResetHandler();
    }, 1500);
  };

  const formResetHandler = () => {
    renderFormRef.current?.resetForm();
  };

  return (
    <div style={{ ...spacing.sapUiContentPadding }}>
      <RenderForm
        editMode={false}
        ref={renderFormRef}
        validationSchema={validationSchema}
        metaData={formMetaData}
        onSubmit={onSubmit}
        submitButtonText="Submit"
      />
      <Button
        style={{ ...spacing.sapUiLargeMarginTop }}
        onClick={() => renderFormRef.current?.submit()}
      >
        Submit
      </Button>
    </div>
  );
};
