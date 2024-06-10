import { browser } from '@wdio/globals'

export default class Page {
    get header() {
        return $('header[aria-label="header"]')
    }

    get footer() {
        return $('footer[aria-label="footer"]')
    }

    open(path) {
        const slashAndPath = path ? `/${path}` : '';

        return browser.url(`https://www.safelite.com${slashAndPath}`)
    }
}
