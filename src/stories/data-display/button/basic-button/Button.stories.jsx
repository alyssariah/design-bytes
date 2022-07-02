import React from 'react';
import { Button } from './Button';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data Display/Button/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Round = Template.bind({});
Round.args = {
  primary: true,
  label: 'Button',
  shape: 'round',
};

export const ButtonStartIcon = Template.bind({});
ButtonStartIcon.args = {
  primary: true,
  startIcon: <FaTrash className="start-icon" />,
  label: 'Delete',
};

export const ButtonEndIcon = Template.bind({});
ButtonEndIcon.args = {
  endIcon: <FaPaperPlane className="end-icon" />,
  label: 'Send',
};
