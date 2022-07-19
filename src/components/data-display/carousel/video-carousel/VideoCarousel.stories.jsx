import React from 'react';
import { VideoCarousel } from './VideoCarousel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data Display/Carousel/VideoCarousel',
  component: VideoCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <VideoCarousel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  videos: [
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg',
      title: 'Top Gear',
    },
  ],
};
