import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';

import results from '../../../.jest-test-results.json';

export default {
  title: 'Components/card',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-card.spec.tsx', 'lids-card.e2e.ts']
  },
  argTypes: {}
};

const Template = ({ url, title, content, sidenote }) => `
  <lids-card style="width: 300px;">
    <img
      src="${url}"
      alt="This is an alternative text displayed when there is an issue when loading the image."
      width="100%"
      height="100px"
      style="border-top-left-radius: var(--lids-radius-default); border-top-right-radius: var(--lids-radius-default);">
    <h1 slot="header">${title}</h1>
    <p slot="body">${content}</p>
    <footer slot="footer">${sidenote}</footer>
  </lids-card>
`;

export const Introduction = Template.bind({});
Introduction.args = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
  title: 'Panda',
  content: 'This is a panda',
  sidenote: 'People love pandas'
};
