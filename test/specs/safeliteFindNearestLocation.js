import { expect } from '@wdio/globals';
import Homepage from '../pageobjects/homepage.page.js';
import StoreLocator from '../pageobjects/storeLocator.page.js';


describe('Safelite test find nearest location', () => {
    it('open Safelite homepage and navigate to Locations', async () => {
        await Homepage.open();

        const locations = await Homepage.locations;
        await locations.click();

        const locationSearchLabel = await StoreLocator.locationSearchLabel;
        expect(locationSearchLabel).toHaveText('Enter ZIP or city and state');
    });

    it('enter Headquarters zip and expect great news!', async () => {
        const locationSearchInput = await StoreLocator.locationSearchInput;
        await locationSearchInput.addValue('43235');

        const locationSearchButton = await StoreLocator.locationSearchButton;
        await locationSearchButton.click();

        const storeLocatorHeading1 = await StoreLocator.heading1;
        expect(storeLocatorHeading1).toHaveText('Great news!');
    });

    it('expect nearest Safelite store to be Worthington, Ohio', async () => {
        const storeLocationCards = await StoreLocator.storeLocationCards;
        const cardContent = await storeLocationCards[0].getText();

        expect(cardContent).toHaveText(expect.stringContaining('Worthington'));
    })
});
