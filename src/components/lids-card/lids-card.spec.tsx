import { newSpecPage } from '@stencil/core/testing';
import { Card } from './lids-card';

describe('lids-card', () => {
  it('should render a lids-card', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<lids-card></lids-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-card>
        <mock:shadow-root>
          <div class="lids-card-content-wrapper">
            <slot></slot>
            <div class="lids-card-content-header">
              <slot name="header"></slot>
            </div>
            <div class="lids-card-content-body">
              <slot name="body"></slot>
            </div>
            <div class="lids-card-content-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </lids-card>
    `);
  });
});
