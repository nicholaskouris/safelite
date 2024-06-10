import { $ } from '@wdio/globals'
import Page from './page.js';

class Homepage extends Page {
    get collapsibleList() {
        return $('[id="collapsible-list"]');
    }

    get locations() {
        return $('a[href="/store-locator"]');
    }

    get getQuotePlusSchedule() {
        return $('a[class="btn btn-primary ghost"]');
    }

    get windshieldRepair() {
        return $('a[href="/windshield-repair"]');
    }

    // page header and footer locators do not work on homepage; overriding here
    get header() {
        return $('header[class="site-header-wrapper"]')
    }
    get footer() {
        return $('footer[class="site-footer"]')
    }
}

export default new Homepage();
