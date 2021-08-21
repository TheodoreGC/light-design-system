import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';

import results from '../../../.jest-test-results.json';

export default {
  title: 'Components/loader',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-loader.spec.tsx', 'lids-loader.e2e.ts']
  },
  argTypes: {
    concealed: {
      description: 'Define if the component is visible or not.',
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = ({ concealed }) => `<lids-loader concealed="${concealed}"></lids-loader>`;

export const Introduction = Template.bind({});
Introduction.args = {
  concealed: false
};
