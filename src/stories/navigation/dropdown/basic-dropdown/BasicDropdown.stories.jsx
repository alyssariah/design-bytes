import React from 'react';

import { BasicDropdown } from './BasicDropdown';

export default {
  title: 'Navigation/Dropdown/BasicDropdown',
  component: BasicDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <BasicDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
