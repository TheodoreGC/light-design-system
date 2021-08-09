'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      }
    },
    {
      type: 'list',
      name: 'style',
      default: 'scss',
      choices: ['css', 'scss'],
      message: 'What type of stylesheet format do you need?'
    },
    {
      type: 'confirm',
      name: 'readme',
      default: true,
      message: 'Does the component requires a readme?'
    },
    {
      type: 'list',
      name: 'documentation',
      choices: ['tsx', 'mdx'],
      message: 'What type of documentation format do you need?'
    },
    {
      type: 'confirm',
      name: 'spec',
      default: true,
      message: 'Does this component requires Unit Testing?'
    },
    {
      type: 'confirm',
      name: 'e2e',
      default: true,
      message: 'Does this component requires E2E?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/lids-{{name}}/lids-{{name}}.tsx',
        templateFile: './component/component.hbs',
        abortOnFail: true
      }
    ];

    if (data.style) {
      actions.push({
        type: 'add',
        path: '../../src/components/lids-{{name}}/lids-{{name}}.{{style}}',
        templateFile: './component/style.hbs',
        abortOnFail: true
      });
    }

    if (data.readme) {
      actions.push({
        type: 'add',
        path: '../../src/components/lids-{{name}}/readme.md',
        templateFile: './component/readme.hbs',
        abortOnFail: true
      });
    }

    if (data.documentation) {
      actions.push({
        type: 'add',
        path: '../../src/components/lids-{{name}}/lids-{{name}}.stories.{{documentation}}',
        templateFile: data.documentation === 'tsx' ? './component/story.hbs' : './component/mdx.hbs',
        abortOnFail: true
      });
    }

    if (data.spec) {
      actions.push({
        type: 'add',
        path: '../../src/components/lids-{{name}}/lids-{{name}}.spec.tsx',
        templateFile: './component/spec.hbs',
        abortOnFail: true
      });
    }

    if (data.e2e) {
      actions.push({
        type: 'add',
        path: '../../src/components/lids-{{name}}/lids-{{name}}.e2e.ts',
        templateFile: './component/e2e.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
