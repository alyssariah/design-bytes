import React from 'react';

import { AppleHeader } from './AppleHeader';

export default {
  title: 'Components/Navigation/Header/AppleHeader',
  component: AppleHeader,
  argTypes: {},
};

const Template = (args) => <AppleHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoUrl: 'https://arkh.com/static-assets/images/logo-white.svg',
  animationType: 'sweetX',
  links: [
    {
      label: 'Controller',
      url: '/controller',
    },
    {
      label: 'Experiences',
      url: '/experiences',
    },
    {
      label: 'Developer',
      url: 'developer',
    },
    {
      label: 'Support',
      url: '/support',
    },
  ],
};
