import { browser } from '@wdio/globals'

export default class Page {
    get getQuotePlusSchedule () {
        return $('a[class="btn btn-primary ghost"]');
    }

    open (path) {
        path = path ? `/${path}` : '';

        return browser.url(`https://www.safelite.com${path}`)
    }
}
