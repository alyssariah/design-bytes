import React from 'react';

import { BasicHeader } from './BasicHeader';

export default {
  title: 'Navigation/Header/BasicHeader',
  component: BasicHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <BasicHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'Jane Doe',
  },
};
