import { newSpecPage } from '@stencil/core/testing';
import { Option } from './lids-option';

describe('lids-option', () => {
  it('should render a lids-option', async () => {
    const page = await newSpecPage({
      components: [Option],
      html: `<lids-option></lids-option>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lids-option>
    `);
  });
});
