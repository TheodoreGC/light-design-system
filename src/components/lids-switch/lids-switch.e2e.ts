import { newE2EPage } from '@stencil/core/testing';

describe('lids-switch', () => {
  it('should render a lids-switch', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-switch></lids-switch>');

    const element = await page.find('lids-switch');
    expect(element).toHaveClass('hydrated');
  });
});
