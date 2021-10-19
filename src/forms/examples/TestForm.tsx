import React, { useRef } from 'react';
import { validationSchema, formMetaData, MixedType } from './meta';
import { RenderForm, RenderFormRef } from '../components/RenderForm';
import { SubmitHandler } from 'react-hook-form';

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
    <RenderForm
      editMode={false}
      ref={renderFormRef}
      validationSchema={validationSchema}
      metaData={formMetaData}
      onSubmit={onSubmit}
    />
  );
};
