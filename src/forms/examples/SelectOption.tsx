import React from 'react';
import { useForm } from 'react-hook-form';
import { MultiComboBoxField } from '../..';

export const SelectOption = () => {
  const methods = useForm();
  console.log(methods);

  const options = [
    {
      label: 'Germany',
      deverlabel: 'Deutchland',
      tamverlabel: 'ஜெர்மனி',
      value: 'de',
    },
    {
      label: 'France',
      deverlabel: 'Frankreich',
      tamverlabel: 'பிரான்ஸ்',
      value: 'fr',
    },
    {
      label: 'India',
      deverlabel: 'Indien',
      tamverlabel: 'இந்தியா',
      value: 'in',
    },
  ];

  return (
    <div>
      {/*       <SelectField
        methods={methods}
        fieldName="test"
        optionsData={options}
        optionLabelKey="tamverlabel"
        optionValueKey="value"
        optionSelectedValue="de"
        optionProps={{}}
      /> */}
      {/*       <ComboBoxField
        methods={methods}
        fieldName="combo"
        optionsData={options}
        optionValueKey="label"
        optionSelectedValue="India"
      /> */}
      <MultiComboBoxField
        methods={methods}
        fieldName="multi"
        optionsData={options}
        optionValueKey="deverlabel"
      />
    </div>
  );
};
