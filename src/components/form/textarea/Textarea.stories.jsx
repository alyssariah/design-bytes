import React from 'react';
import { Textarea } from './Textarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/Textarea/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

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

export const WordLimit = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WordLimit.args = {
  wordLimit: 200,
};
