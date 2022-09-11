import { addons } from '@storybook/addons';
import Theme from './theme';
import favicon from '../public/logo.png';

addons.setConfig({
  theme: Theme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
