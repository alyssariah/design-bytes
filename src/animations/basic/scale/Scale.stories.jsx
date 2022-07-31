import React from 'react';
import { Scale } from './Scale';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/Scale',
  component: Scale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Scale {...args} />;

export const ScaleUpCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleUpCenter.args = {
  animation: 'scale-up-center',
};

export const ScaleUpVerCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleUpVerCenter.args = {
  animation: 'scale-up-ver-center',
};

export const ScaleUpBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleUpBottom.args = {
  animation: 'scale-up-bottom',
};

export const ScaleDownCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleDownCenter.args = {
  animation: 'scale-down-center',
};

export const ScaleDownVerCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleDownVerCenter.args = {
  animation: 'scale-down-ver-center',
};

export const ScaleDownBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScaleDownCenter.args = {
  animation: 'scale-down-bottom',
};
