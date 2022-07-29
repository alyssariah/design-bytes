import React from 'react';

import { BasicDropdown } from './BasicDropdown';

export default {
  title: 'Components/Navigation/Dropdown/BasicDropdown',
  component: BasicDropdown,
  argTypes: {},
};

const Template = (args) => <BasicDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
