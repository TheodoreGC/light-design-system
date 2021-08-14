import { newE2EPage } from '@stencil/core/testing';

describe.skip('lids-icon', () => {
  it('should render a lids-icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-icon></lids-icon>');

    const element = await page.find('lids-icon');
    expect(element).toHaveClass('hydrated');
  });
});
