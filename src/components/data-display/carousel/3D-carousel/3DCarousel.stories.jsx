import React from 'react';
import { ThreeDCarousel } from './3DCarousel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Data Display/Carousel/3D Carousel',
  component: ThreeDCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThreeDCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      image:
        'https://images.unsplash.com/photo-1652626713984-4bcbc23b5ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Reveal',
      details: 'Details coming soon!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Presale',
      details: 'Details coming soon!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1638913658642-8f22bae3335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Fullsale',
      details: 'Details coming soon!',
    },
  ],
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
