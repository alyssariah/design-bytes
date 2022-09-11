import React from 'react';
import { Input } from './Input';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Input/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  config: 'filled',
};

export const HelpText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelpText.args = {
  helpText: 'Help text',
};

export const LeadingIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeadingIcon.args = {
  leadingIcon: <AiOutlineSearch />,
};

export const FollowingIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FollowingIcon.args = {
  followingIcon: <AiOutlineClose />,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  status: 'disabled',
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  status: 'error',
};

export const NonRequired = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NonRequired.args = {
  required: false,
};
