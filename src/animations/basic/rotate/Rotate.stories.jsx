import React from 'react';
import { Rotate } from './Rotate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Animations/Basic/Rotate',
  component: Rotate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Rotate {...args} />;

export const RotateCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateCenter.args = {
  animation: 'rotate-center',
};

export const RotateBl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateBl.args = {
  animation: 'rotate-bl',
};

export const RotateVertCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateVertCenter.args = {
  animation: 'rotate-vert-center',
};

export const RotateDiagonalBr = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateDiagonalBr.args = {
  animation: 'rotate-diagonal-br',
};

export const RotateVertLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateVertLeft.args = {
  animation: 'rotate-vert-left',
};

export const RotateVertRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateVertRight.args = {
  animation: 'rotate-vert-right',
};

export const RotateHorCenter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateHorCenter.args = {
  animation: 'rotate-hor-center',
};

export const RotateDiagonal1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateDiagonal1.args = {
  animation: 'rotate-diagonal-1',
};

export const RotateHorTop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateHorTop.args = {
  animation: 'rotate-hor-top',
};

export const RotateDiagonal2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateDiagonal2.args = {
  animation: 'rotate-diagonal-2',
};

export const RotateHorBottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateHorBottom.args = {
  animation: 'rotate-hor-bottom',
};

export const RotateDiagonalTr = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RotateDiagonalTr.args = {
  animation: 'rotate-diagonal-tr',
};
