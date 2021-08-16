import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';
import results from '../../../.jest-test-results.json';
export default {
  title: 'Components/masthead',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-masthead.spec.tsx', 'lids-masthead.e2e.ts']
  },
  argTypes: {}
};
const Template = () => `
  <lids-masthead>
    <h1 slot="title">This is the title</h1>
    <div slot="action">
      <lids-icon name="apps" width="20px" height="20px"></lids-icon>
    </div>
  </lids-masthead>
`;
export const Introduction = Template.bind({});
Introduction.args = {};
