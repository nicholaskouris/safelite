
import { $ } from '@wdio/globals'
import Page from './page.js';


class WindshieldRepair extends Page {
    get subHeader() {
        return $('h4');
    }
}

export default new WindshieldRepair();
