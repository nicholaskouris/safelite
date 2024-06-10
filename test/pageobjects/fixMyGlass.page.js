import { $ } from '@wdio/globals'
import Page from './page.js';

class FixMyGlass extends Page {
    get serviceZipLabel() {
        return $('label[class="service-zip"]');
    }
}

export default new FixMyGlass();
