import React from 'react';
import { Meta, Story } from '@storybook/react';

import {PersonForm} from '../src/forms/examples/PersonForm';

const meta: Meta = {
    title: 'Person Form',
    component: PersonForm
}

export default meta

const Template: Story = args => <PersonForm {...args} />

export const Default = Template.bind({})

Default.args = {   
}