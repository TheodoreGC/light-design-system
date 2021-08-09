import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';

export default {
  title: 'Components/MyComponent',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['my-component.spec.tsx', 'my-component.e2e.ts']
  }
};

const Template = ({ first, middle, last }) => `<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;

export const Introduction = Template.bind({});
Introduction.args = {
  first: 'John',
  middle: 'Bill',
  last: 'Doe'
};
