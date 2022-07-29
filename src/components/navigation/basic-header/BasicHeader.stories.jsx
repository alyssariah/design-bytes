import React from 'react';

import { BasicHeader } from './BasicHeader';

export default {
  title: 'Components/Navigation/Header/BasicHeader/BasicHeader',
  component: BasicHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => <BasicHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
