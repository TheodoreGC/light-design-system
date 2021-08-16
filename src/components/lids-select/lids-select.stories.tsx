import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';

import results from '../../../.jest-test-results.json';

export default {
  title: 'Components/select',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-select.spec.tsx', 'lids-select.e2e.ts']
  },
  argTypes: {}
};

const Template = () => `
  <lids-select>
    <lids-option value="africa">Africa</lids-option>
    <lids-option value="america">America</lids-option>
    <lids-option value="asia">Asia</lids-option>
    <lids-option value="europe">Europe</lids-option>
    <lids-option value="oceania">Oceania</lids-option>
  </lids-select>
`;

export const Introduction = Template.bind({});
Introduction.args = {};
