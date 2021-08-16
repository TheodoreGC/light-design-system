import { newE2EPage } from '@stencil/core/testing';

describe('lids-option', () => {
  it('should render a lids-option', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-option></lids-option>');

    const element = await page.find('lids-option');
    expect(element).toHaveClass('hydrated');
  });
});
