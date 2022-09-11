import React from 'react';
import { FlickityCarousel } from './FlickityCarousel';

export default {
  title: 'Components/Data Display/Carousel/FlickityCarousel',
  component: FlickityCarousel,
  argTypes: {},
};

const Template = (args) => <FlickityCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  flickityOptions: {
    initialIndex: 1,
    draggable: true,
    wrapAround: true,
    groupCells: true,
    autoPlay: 3000,
  },
  carouselSlides: [
    {
      src: 'src/assets/demo-carousel/controller-1.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-2.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-3.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-4.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-5.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-6.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-7.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-8.png',
      alt: 'carousel-image',
    },
    {
      src: 'src/assets/demo-carousel/controller-9.png',
      alt: 'carousel-image',
    },
  ],
};
