import { $ } from '@wdio/globals'
import Page from './page.js';

class FixMyGlass extends Page {
    get serviceZipLabel() {
        return $('label[class="service-zip"]');
    };

    get serviceZipInput() {
        return $('input[placeholder="ZIP code"]');
    };
}

export default new FixMyGlass();
