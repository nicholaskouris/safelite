
import { $ } from '@wdio/globals'
import Page from './page.js';

class WindshieldRepair extends Page {
    get heading4() {
        return $('h4');
    }
}

export default new WindshieldRepair();
