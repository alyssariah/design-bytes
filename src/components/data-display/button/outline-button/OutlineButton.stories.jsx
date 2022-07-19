import React from 'react';
import { OutlineButton } from './OutlineButton';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data Display/Button/OutlineButton',
  component: OutlineButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OutlineButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Round = Template.bind({});
Round.args = {
  label: 'Button',
  shape: 'round',
};

export const ButtonStartIcon = Template.bind({});
ButtonStartIcon.args = {
  startIcon: <FaTrash className="start-icon" />,
  label: 'Delete',
};

export const ButtonEndIcon = Template.bind({});
ButtonEndIcon.args = {
  endIcon: <FaPaperPlane className="end-icon" />,
  label: 'Send',
};
