import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

const SOURCE_REGEX = /`(.*?)`/s;

export const parameters = {
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (!notes) return null;

      // Remove the title from the markdown in favour of storybook title
      return notes.split('\n').slice(1).join('\n');
    },
    transformSource: (src, storyId) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    }
  },
  controls: { expanded: true },
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: ['Getting Started', 'Contributing', 'Core', 'Components']
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}
