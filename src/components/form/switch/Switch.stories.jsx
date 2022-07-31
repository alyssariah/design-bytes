import React from 'react';
import { Switch } from './Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Switch/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Switch {...args} />;

export const Sky = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sky.args = {};

export const Land = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Land.args = {
  mode: 'land',
};

export const Fruit = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fruit.args = {
  mode: 'fruit',
};

export const threeD = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
threeD.args = {
  mode: '3d',
};
