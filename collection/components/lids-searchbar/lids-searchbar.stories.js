import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';
import results from '../../../.jest-test-results.json';
export default {
  title: 'Components/searchbar',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-searchbar.spec.tsx', 'lids-searchbar.e2e.ts']
  },
  argTypes: {}
};
const Template = ({ placeholder }) => `<lids-searchbar placeholder="${placeholder}"></lids-searchbar>`;
export const Introduction = Template.bind({});
Introduction.args = {
  placeholder: 'Search for a country...'
};
