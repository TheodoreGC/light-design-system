import { newE2EPage } from '@stencil/core/testing';

describe('lids-loader', () => {
  it('should render a lids-loader', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-loader></lids-loader>');

    const element = await page.find('lids-loader');
    expect(element).toHaveClass('hydrated');
  });
});
