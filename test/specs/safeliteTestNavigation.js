import { expect } from '@wdio/globals';
import Homepage from '../pageobjects/homepage.page.js';
import WindshieldRepair from '../pageobjects/windshieldRepair.page.js';

describe('Safelite test navigation', () => {
    it('open Safelite homepage', async () => {
        await Homepage.open();
    });

    it('navigate to expert windshield repair page', async () => {
        const collapsibleList = await Homepage.collapsibleList;
        await collapsibleList.click();

        const windshieldRepair = await Homepage.windshieldRepair;
        expect(windshieldRepair).toBeDisplayed;
    });

    it('expert windshield repair subheader to have text', async () => {
        const windshieldRepair = await Homepage.windshieldRepair;
        await windshieldRepair.click();

        const windshieldRepairHeading4 = await WindshieldRepair.heading4;
        expect(windshieldRepairHeading4).toHaveText('Safelite’s repair-first mindset')
    });
});
