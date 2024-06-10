import { $ } from '@wdio/globals'
import Page from './page.js';

class Homepage extends Page {
    get collapsibleList() {
        return $('[id="collapsible-list"]');
    }

    get windshieldRepair() {
        return $('a[href="/windshield-repair"]');
    }
}

export default new Homepage();
