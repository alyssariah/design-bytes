import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';
import { FaCodepen, FaNewspaper, FaConnectdevelop, FaArtstation } from 'react-icons/fa';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Data Display/Carousel/TestimonialSlider',
  component: TestimonialSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    iconColor: { control: 'color' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TestimonialSlider {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  cards: [
    {
      icon: <FaCodepen className="sb-tslider__image" />,
      title: 'codepen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaNewspaper className="sb-tslider__image" />,
      title: 'newspaper',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaConnectdevelop className="sb-tslider__image" />,
      title: 'connectdevelop',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaArtstation className="sb-tslider__image" />,
      title: 'artstation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
  ],
};
