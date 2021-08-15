import { newE2EPage } from '@stencil/core/testing';

describe('lids-masthead', () => {
  it('should render a lids-masthead', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-masthead></lids-masthead>');

    const element = await page.find('lids-masthead');
    expect(element).toHaveClass('hydrated');
  });
});
