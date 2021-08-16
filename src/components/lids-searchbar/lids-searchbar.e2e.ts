import { newE2EPage } from '@stencil/core/testing';

describe('lids-searchbar', () => {
  it('should render a lids-searchbar', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-searchbar></lids-searchbar>');

    const element = await page.find('lids-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
