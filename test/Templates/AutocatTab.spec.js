'use strict';
const autocat = require('../../dist/autocat');

describe('AutocatTab', function () {
    describe('getHtml()', function () {
        it('Return HTML string should contain MENU_ITEM_NAME in MENU_ITEM_TPL', function () {
            var autocatTab = new autocat.Templates.AutocatTab();

            expect(autocatTab.getHtml().includes(autocatTab.MENU_ITEM_NAME)).toBeTruthy();
        });
    });
});
