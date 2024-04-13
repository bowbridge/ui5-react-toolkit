import React, { useRef, useState } from 'react';
import { validationSchema, formMetaData, MixedType } from './meta';
import { RenderForm, RenderFormRef } from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';

export const TestForm = () => {
  const renderFormRef = useRef<RenderFormRef>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<MixedType> = data => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
    console.log(data);
    setTimeout(() => {
      formResetHandler();
      setLoading(false);
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
        showLoader={loading}
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
