import { withTests } from '@storybook/addon-jest';
import notes from './readme.md';
import results from '../../../.jest-test-results.json';
import * as icons from './index';
export default {
  title: 'Components/icon',
  decorators: [withTests({ results })],
  parameters: {
    notes,
    jest: ['lids-icon.spec.tsx', 'lids-icon.e2e.ts']
  },
  argTypes: {
    name: {
      name: 'name',
      type: {
        name: 'string',
        required: true
      },
      description: 'The name of the icon to display.',
      control: {
        type: 'select',
        options: Object.keys(icons).map(icon => {
          const iconName = icon.split('lidsIcon').pop();
          return iconName.charAt(0).toLowerCase() + iconName.slice(1);
        })
      }
    },
    width: {
      name: 'width',
      type: {
        name: 'string',
        required: false
      },
      description: 'The width of the icon in pixel. Example: "20px".',
      default: '16px',
      control: {
        type: 'text'
      }
    },
    height: {
      name: 'height',
      type: {
        name: 'string',
        required: false
      },
      description: 'The height of the icon in pixel. Example: "20px".',
      default: '16px',
      control: {
        type: 'text'
      }
    }
  }
};
const Template = ({ name, width, height }) => `<lids-icon name="${name}" width="${width}" height="${height}"></lids-icon>`;
export const Introduction = Template.bind({});
Introduction.args = {
  name: 'add',
  width: '16',
  height: '16'
};
