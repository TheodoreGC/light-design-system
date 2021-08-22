import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';

import results from '../../../.jest-test-results.json';

export default {
  title: 'Components/pill',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-pill.spec.tsx', 'lids-pill.e2e.ts']
  },
  argTypes: {}
};

const Template = ({ content }) => `<lids-pill><a href="#" class="lids-link">${content}</a></lids-pill>`;

export const Introduction = Template.bind({});
Introduction.args = {
  content: 'This is a nav pill. Click me!'
};
