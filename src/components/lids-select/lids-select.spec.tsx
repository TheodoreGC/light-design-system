import { newSpecPage } from '@stencil/core/testing';
import { Select } from './lids-select';

describe('lids-select', () => {
  it('should render a lids-select', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<lids-select></lids-select>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-select>
        <mock:shadow-root>
          <select class="lids-select"></select>
        </mock:shadow-root>
      </lids-select>
    `);
  });
});
