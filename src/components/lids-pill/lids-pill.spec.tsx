import { newSpecPage } from '@stencil/core/testing';
import { Pill } from './lids-pill';

describe('lids-pill', () => {
  it('should render a lids-pill', async () => {
    const page = await newSpecPage({
      components: [Pill],
      html: `<lids-pill></lids-pill>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-pill>
        <mock:shadow-root>
          <div class="lids-pill-wrapper">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </lids-pill>
    `);
  });
});
