import { expect } from '@wdio/globals';
import Homepage from '../pageobjects/homepage.page.js';
import FixMyGlass from '../pageobjects/fixMyGlass.page.js';

describe('Safelite test sticky header', () => {
    it('open Safelite homepage and navigate to fixMyGlass', async () => {
        await Homepage.open();

        const getQuotePlusSchedule = await Homepage.getQuotePlusSchedule;
        await getQuotePlusSchedule.click();

        const serviceZip = await FixMyGlass.serviceZipLabel;
        expect(serviceZip).toBeDisplayedInViewport();
    });

    it('expect header to stick after scroll to the bottom of the page', async () => {
        const header = await FixMyGlass.header;
        const footer = await FixMyGlass.footer;
        await footer.scrollIntoView();

        expect(header).toBeDisplayedInViewport;
    });
});

