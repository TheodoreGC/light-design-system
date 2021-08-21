import { newSpecPage } from '@stencil/core/testing';
import { Loader } from './lids-loader';

describe('lids-loader', () => {
  it('should render a lids-loader', async () => {
    const page = await newSpecPage({
      components: [Loader],
      html: `<lids-loader></lids-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-loader>
        <mock:shadow-root>
          <div class="lids-loader-element"></div>
          <div class="lids-loader-element"></div>
        </mock:shadow-root>
      </lids-loader>
    `);
  });
});
