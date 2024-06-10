import { expect } from '@wdio/globals';
import Homepage from '../pageobjects/homepage.page.js';
import FixMyGlass from '../pageobjects/fixMyGlass.page.js';

describe('Safelite test sticky header', () => {
    it('open Safelite homepage and navigate to fixMyGlass', async () => {
        await Homepage.open();

        const getQuotePlusSchedule = await Homepage.getQuotePlusSchedule;
        await getQuotePlusSchedule.click();

        const serviceZip = await FixMyGlass.serviceZipLabel;
        expect(serviceZip).toBeDisplayed();
    });

    it('expect fixMyGlass header to stick after scroll to the bottom of the page', async () => {
        const footer = await FixMyGlass.footer;
        await footer.scrollIntoView();

        const header = await FixMyGlass.header;
        expect(await header.isDisplayed()).toBe(true);
    });

    it('expect homepage header to not stick after scroll to the bottom of the page', async () => {
        await Homepage.open();

        const footer = await Homepage.footer;
        await footer.scrollIntoView();

        const header = await Homepage.header;
        expect(await header.isDisplayed()).toBe(false);
    });

});

