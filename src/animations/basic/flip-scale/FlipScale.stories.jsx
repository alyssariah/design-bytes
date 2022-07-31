import React from 'react';
import { FlipScale } from './FlipScale';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/FlipScale',
  component: FlipScale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FlipScale {...args} />;

export const FlipScaleUpHor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleUpHor.args = {
  animation: 'flip-scale-up-hor',
};

export const FlipScaleDownDiag1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleDownDiag1.args = {
  animation: 'flip-scale-down-diag-1',
};

export const FlipScaleDownHor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleDownHor.args = {
  animation: 'flip-scale-down-hor',
};

export const FlipScaleUpDiag2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleUpDiag2.args = {
  animation: 'flip-scale-up-diag-2',
};

export const FlipScaleUpVer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleUpVer.args = {
  animation: 'flip-scale-up-ver',
};

export const FlipScaleDownDiag2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleDownDiag2.args = {
  animation: 'flip-scale-down-diag-2',
};

export const FlipScaleDownVer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleDownVer.args = {
  animation: 'flip-scale-down-ver',
};

export const FlipScaleUpDiag1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScaleUpDiag1.args = {
  animation: 'flip-scale-up-diag-1',
};

export const FlipScale2HorTop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScale2HorTop.args = {
  animation: 'flip-scale-2-hor-top',
};

export const FlipScale2VerRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScale2VerRight.args = {
  animation: 'flip-scale-2-ver-right',
};

export const FlipScale2HorBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScale2HorBottom.args = {
  animation: 'flip-scale-2-hor-bottom',
};

export const FlipScale2VerLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipScale2VerLeft.args = {
  animation: 'flip-scale-2-ver-left',
};
