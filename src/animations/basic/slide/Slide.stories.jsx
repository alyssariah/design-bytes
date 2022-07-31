import React from 'react';
import { Slide } from './Slide';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/Slide',
  component: Slide,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Slide {...args} />;

export const SlideTop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideTop.args = {
  animation: 'slide-top',
};

export const SlideLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideLeft.args = {
  animation: 'slide-left',
};

export const SlideTr = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideTr.args = {
  animation: 'slide-tr',
};

export const SlideTl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideTl.args = {
  animation: 'slide-tl',
};

export const SlideRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideRight.args = {
  animation: 'slide-right',
};

export const SlideBr = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBr.args = {
  animation: 'slide-br',
};

export const SlideBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBottom.args = {
  animation: 'slide-bottom',
};

export const SlideBckCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBckCenter.args = {
  animation: 'slide-bck-center',
};

export const SlideBckBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBckBottom.args = {
  animation: 'slide-bck-bottom',
};

export const SlideBckTop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBckTop.args = {
  animation: 'slide-bck-top',
};

export const SlideBckLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBckLeft.args = {
  animation: 'slide-bck-left',
};

export const SlideBckRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideBckRight.args = {
  animation: 'slide-bck-right',
};

export const SlideFwdCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideFwdCenter.args = {
  animation: 'slide-fwd-center',
};

export const SlideFwdTop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideFwdTop.args = {
  animation: 'slide-fwd-top',
};

export const SlideFwdLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideFwdLeft.args = {
  animation: 'slide-fwd-left',
};

export const SlideFwdRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideFwdRight.args = {
  animation: 'slide-fwd-right',
};

export const SlideFwdBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlideFwdBottom.args = {
  animation: 'slide-fwd-bottom',
};
