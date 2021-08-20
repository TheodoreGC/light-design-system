import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './lids-switch';

describe('lids-switch', () => {
  it('should render a lids-switch', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<lids-switch></lids-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-switch>
        <mock:shadow-root>
          <label class="lids-switch-form-label">
            <input class="lids-switch-form-checkbox" type="checkbox">
            <span class="lids-switch-form-slider"></span>
          </label>
        </mock:shadow-root>
      </lids-switch>
    `);
  });
});
