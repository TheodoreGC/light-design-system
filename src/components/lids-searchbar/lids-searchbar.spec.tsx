import { newSpecPage } from '@stencil/core/testing';
import { Searchbar } from './lids-searchbar';

describe('lids-searchbar', () => {
  it('should render a lids-searchbar', async () => {
    const page = await newSpecPage({
      components: [Searchbar],
      html: `<lids-searchbar></lids-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <lids-searchbar>
        <mock:shadow-root>
          <form class="lids-search-form">
            <input class="lids-search-form-input" placeholder="" type="search" />
            <input class="lids-search-form-submit" type="submit" value="Search" />
          </form>
        </mock:shadow-root>
      </lids-searchbar>
    `);
  });
});
