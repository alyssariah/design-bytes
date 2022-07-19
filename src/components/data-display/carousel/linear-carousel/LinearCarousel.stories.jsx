import React from 'react';
import { LinearCarousel } from './LinearCarousel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Data Display/Carousel/LinearCarousel',
  component: LinearCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LinearCarousel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  slides: [
    {
      number: '5',
      image:
        'https://ununsplash.imgix.net/uploads/141223808515744db9995/3361b5e1?q=75&fm=jpg&w=602',
      title: 'This is the fifth slide title. Photo by David Marcu.',
    },
    {
      number: '4',
      image: 'https://unsplash.imgix.net/photo-1415356838286-df6fd593e8b3?q=75&fm=jpg&w=600',
      title: 'This is the fourth slide title. Photo by Ryan Lum.',
    },
    {
      number: '3',
      image:
        'https://ununsplash.imgix.net/reserve/JaI1BywIT5Or8Jfmci1E_zakopane.jpg?q=75&fm=jpg&w=600',
      title: 'This is the third slide title. Photo by Tomasz Paciorek.',
    },
    {
      number: '2',
      image:
        'https://ununsplash.imgix.net/uploads/1413387158190559d80f7/6108b580?fit=crop&fm=jpg&q=75&w=600',
      title: 'This is the second slide title. Photo by S Charles.',
    },
    {
      number: '1',
      image:
        'https://ununsplash.imgix.net/uploads/1413399939678471ea070/2c0343f7?q=75&fm=jpg&w=601',
      title: 'First slide title. Photo by Forrest Cavale.',
    },
  ],
};
