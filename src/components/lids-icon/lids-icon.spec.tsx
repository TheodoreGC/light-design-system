import { newSpecPage } from '@stencil/core/testing';
// import { Icon } from './lids-icon';

describe.skip('lids-icon', () => {
  it('should render a lids-icon', async () => {
    const page = await newSpecPage({
      components: [
        // TODO: Fix import
        // Icon
      ],
      html: `<lids-icon></lids-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lids-icon>
    `);
  });
});
