import { newE2EPage } from '@stencil/core/testing';

describe('lids-select', () => {
  it('should render a lids-select', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-select></lids-select>');

    const element = await page.find('lids-select');
    expect(element).toHaveClass('hydrated');
  });
});
