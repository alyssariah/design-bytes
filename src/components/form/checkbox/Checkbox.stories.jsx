import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Form/Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Sharp = Template.bind({});
Sharp.args = {
  config: 'sharp',
  checkedStatus: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  config: 'transparent',
  checkedStatus: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  config: 'transparent',
  checkedStatus: true,
  status: 'disabled',
};

export const NonLabel = Template.bind({});
NonLabel.args = {
  label: '',
  checkedStatus: true,
};
