
import { $ } from '@wdio/globals'
import Page from './page.js';

class WindshieldRepair extends Page {
    get header() {
        return $('header[aria-label="header"]')
    }

    get heading4() {
        return $('h4');
    }
    get footer() {
        return $('footer[aria-label="footer"]')
    }
}

export default new WindshieldRepair();
