import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TestForm } from '../src/forms/examples/TestForm';

const meta: Meta = {
  title: 'Person Form',
  component: TestForm,
};

export default meta;

const Template: Story = (args) => <TestForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
