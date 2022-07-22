import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation/HamburgerMenu/HamburgerMenu',
  component: HamburgerMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stroke: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HamburgerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MiddleArrow = Template.bind({});
MiddleArrow.args = { animationType: 'middleArrow' };

export const Close = Template.bind({});
Close.args = { animationType: 'close' };

export const SnakeX = Template.bind({});
SnakeX.args = { animationType: 'snakeX' };

export const RotateArrow = Template.bind({});
RotateArrow.args = { animationType: 'rotateArrow' };

export const SweetX = Template.bind({});
SweetX.args = { animationType: 'sweetX' };

export const BottomX = Template.bind({});
BottomX.args = { animationType: 'bottomX' };

export const RotateX = Template.bind({});
RotateX.args = { animationType: 'rotateX' };
