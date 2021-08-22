import { newE2EPage } from '@stencil/core/testing';

describe('lids-pill', () => {
  it('should render a lids-pill', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-pill></lids-pill>');

    const element = await page.find('lids-pill');
    expect(element).toHaveClass('hydrated');
  });
});
