import React from 'react';

import { MenuItem } from './MenuItem';
import { BsFillPersonFill } from 'react-icons/bs';

export default {
  title: 'Components/Navigation/Dropdown/MenuItem',
  component: MenuItem,
  argTypes: {},
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <BsFillPersonFill />,
};
