import { $ } from '@wdio/globals'
import Page from './page.js';

class StoreLocator extends Page {
    get locationSearchLabel() {
        return $('label[for="locationSearch-1"]');
    }

    get locationSearchInput() {
        return $('input[id="locationSearch-1"]');
    }

    get locationSearchButton() {
        return $('button[class="btn btn-primary"]');
    }

    get heading1() {
        return $('h1');
    }

    get storeLocationCards() {
        return $$('a[class="card-wrapper store-location-card card-clickable"]');
    }

    get storeLocatorCardContent() {
        return $('div[class="card-content"]')
    }
}

export default new StoreLocator();

