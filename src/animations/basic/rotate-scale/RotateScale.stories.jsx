import React from 'react';
import { RotateScale } from './RotateScale';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/RotateScale',
  component: RotateScale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RotateScale {...args} />;

export const RotateScaleUp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleUp.args = {
  animation: 'rotate-scale-up',
};

export const RotateScaleUpDiag1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleUpDiag1.args = {
  animation: 'rotate-scale-up-diag-1',
};

export const RotateScaleDown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleDown.args = {
  animation: 'rotate-scale-down',
};

export const RotateScaleDownDiag1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleDownDiag1.args = {
  animation: 'rotate-scale-down-diag-1',
};

export const RotateScaleUpHor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleUpHor.args = {
  animation: 'rotate-scale-up-hor',
};

export const RotateScaleUpDiag2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleUpDiag2.args = {
  animation: 'rotate-scale-up-diag-2',
};

export const RotateScaleDownHor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleDownHor.args = {
  animation: 'rotate-scale-down-hor',
};

export const RotateScaleDownDiag2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleDownDiag2.args = {
  animation: 'rotate-scale-down-diag-2',
};

export const RotateScaleUpVer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleUpVer.args = {
  animation: 'rotate-scale-up-ver',
};

export const RotateScaleDownVer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateScaleDownVer.args = {
  animation: 'rotate-scale-down-ver',
};
