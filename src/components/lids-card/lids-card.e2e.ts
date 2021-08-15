import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('lids-card', () => {
  it('should render a lids-card', async () => {
    const page = await newE2EPage();
    await page.setContent('<lids-card></lids-card>');

    const element = await page.find('lids-card');
    expect(element).toHaveClass('hydrated');
  });

  describe('styles', () => {
    let page: E2EPage = null;
    let element = null;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent('<lids-card></lids-card>');

      element = await page.find('lids-card');
    });

    afterEach(async () => {
      page = null;
      element = null;
    });

    describe('default', () => {
      let style;

      beforeEach(async () => {
        await page.waitForChanges();
        style = await element.getComputedStyle();
      });

      it('should be display block', async () => {
        expect(style.display).toEqual('block');
      });
      it('should have a shadow', async () => {
        expect(style.boxShadow).toEqual('rgb(200, 200, 200) 1px 1px 4px 0px');
      });
      it('should have its corners outer border edge rounded', async () => {
        expect(style.borderRadius).toEqual('4px');
      });
    });
  });

  describe('card header', () => {
    let page: E2EPage = null;
    let header = null;
    let style = null;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent('<lids-card></lids-card>');

      header = await page.find('lids-card >>> .lids-card-content-header');
      style = await header.getComputedStyle();
    });

    afterEach(async () => {
      page = null;
      header = null;
      style = null;
    });

    it('should have the appropriate padding', async () => {
      expect(style.padding).toEqual('8px');
    });
    it('should have the appropriate margin', async () => {
      expect(style.margin).toEqual('0px 16px');
    });
  });

  describe('card body', () => {
    let page: E2EPage = null;
    let body = null;
    let style = null;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent('<lids-card></lids-card>');

      body = await page.find('lids-card >>> .lids-card-content-body');
      style = await body.getComputedStyle();
    });

    afterEach(async () => {
      page = null;
      body = null;
      style = null;
    });

    it('should have the appropriate padding', async () => {
      expect(style.padding).toEqual('8px');
    });
    it('should have the appropriate margin', async () => {
      expect(style.margin).toEqual('0px 16px');
    });
  });

  describe('card footer', () => {
    let page: E2EPage = null;
    let footer = null;
    let style = null;

    beforeEach(async () => {
      page = await newE2EPage();
      await page.setContent('<lids-card></lids-card>');

      footer = await page.find('lids-card >>> .lids-card-content-footer');
      style = await footer.getComputedStyle();
    });

    afterEach(async () => {
      page = null;
      footer = null;
      style = null;
    });

    it('should have the appropriate padding', async () => {
      expect(style.padding).toEqual('8px');
    });
    it('should have the appropriate margin', async () => {
      expect(style.margin).toEqual('0px 16px');
    });
  });
});
