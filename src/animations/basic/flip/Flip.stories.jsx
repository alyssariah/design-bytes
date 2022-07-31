import React from 'react';
import { Flip } from './Flip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/Flip',
  component: Flip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Flip {...args} />;

export const FlipHorizontalBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipHorizontalBottom.args = {
  animation: 'flip-horizontal-bottom',
};

export const FlipVerticalLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipVerticalLeft.args = {
  animation: 'flip-vertical-left',
};

export const FlipDiagonal1Bck = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipDiagonal1Bck.args = {
  animation: 'flip-diagonal-1-bck',
};

export const FlipDiagonal2Fwd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipDiagonal2Fwd.args = {
  animation: 'flip-diagonal-2-fwd',
};

export const FlipVerticalBck = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipVerticalBck.args = {
  animation: 'flip-vertical-bck',
};

export const FlipVerticalFwd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipVerticalFwd.args = {
  animation: 'flip-vertical-fwd',
};

export const FlipHorizontalFwd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipHorizontalFwd.args = {
  animation: 'flip-horizontal-fwd',
};

export const FlipDiagonal1Tr = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipDiagonal1Tr.args = {
  animation: 'flip-diagonal-1-tr',
};

export const FlipDiagonal2Tl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipDiagonal2Tl.args = {
  animation: 'flip-diagonal-2-tl',
};

export const FlipVerticalRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FlipVerticalRight.args = {
  animation: 'flip-vertical-right',
};

export const Flip2HorTop2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flip2HorTop2.args = {
  animation: 'flip-2-hor-top-2',
};

export const Flip2HorTopBck = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flip2HorTopBck.args = {
  animation: 'flip-2-hor-top-bck',
};

export const Flip2HorTopFwd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flip2HorTopFwd.args = {
  animation: 'flip-2-hor-top-fwd',
};

export const Flip2VerRight1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flip2VerRight1.args = {
  animation: 'flip-2-ver-right-1',
};

export const Flip2VerLeft1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flip2VerLeft1.args = {
  animation: 'flip-2-ver-left-1',
};
