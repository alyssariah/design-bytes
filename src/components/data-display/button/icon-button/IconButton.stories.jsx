import React from 'react';
import { IconButton } from './IconButton';
import { FaCodepen, FaSearch } from 'react-icons/fa';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Data Display/Button/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: <FaCodepen />,
  primary: true,
};

export const Default = Template.bind({});
Default.args = {
  icon: <FaSearch />,
};
