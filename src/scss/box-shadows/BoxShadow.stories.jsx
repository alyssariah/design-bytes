import React from 'react';

import { BoxShadow } from './BoxShadow';

export default {
  title: 'Design Tokens/Box Shadows',
  component: BoxShadow,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => <BoxShadow />;

export const Examples = Template.bind({});
