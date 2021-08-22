import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';
import results from '../../../.jest-test-results.json';
export default {
  title: 'Components/switch',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-switch.spec.tsx', 'lids-switch.e2e.ts']
  },
  argTypes: {
    rounded: {
      name: 'rounded',
      type: {
        name: 'boolean',
        required: false
      },
      description: 'Define the shape of the toggle switch.',
      control: {
        type: 'boolean'
      }
    },
    checked: {
      name: 'checked',
      type: {
        name: 'boolean',
        required: false
      },
      description: 'Specify the element should be pre-selected.',
      control: {
        type: 'boolean'
      }
    }
  }
};
const Template = ({ rounded, checked }) => `<lids-switch rounded="${rounded}" checked="${checked}"></lids-switch>`;
export const Introduction = Template.bind({});
Introduction.args = {
  rounded: true,
  checked: false
};
