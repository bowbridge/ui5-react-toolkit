import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { TestForm } from '../src/forms/examples/TestForm';

const meta: Meta = {
  title: 'Person Form',
  component: TestForm,
};

export default meta;

const Template: StoryFn = args => <TestForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
