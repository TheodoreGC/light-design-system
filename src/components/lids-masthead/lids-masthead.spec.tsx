import { newSpecPage } from '@stencil/core/testing';
import { Masthead } from './lids-masthead';

describe('lids-masthead', () => {
  it('should render a lids-masthead', async () => {
    const page = await newSpecPage({
      components: [Masthead],
      html: `<lids-masthead></lids-masthead>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-masthead>
        <mock:shadow-root>
          <div class="lids-masthead-container">
            <div class="lids-masthead-title">
              <slot name="title"></slot>
            </div>
            <div class="lids-masthead-action">
              <slot name="action"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </lids-masthead>
    `);
  });
});
