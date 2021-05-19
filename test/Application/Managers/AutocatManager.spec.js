'use strict';
const autocat = require('../../../dist/autocat');
const gamePageMock = require('../../KittensGame/Types/__mocks__/GamePageMock');

describe('AutocatManager', function () {
    describe('constructor', function () {
        it('New instance should implement Application.Managers.IAutocatManager', function () {
            var autocatManager = new autocat.Application.Managers.AutocatManager(gamePageMock);

            expect(autocatManager.hasOwnProperty('game')).toBeTruthy();
        });

        it('Constructor should set parameter properties', function () {
            var autocatManager = new autocat.Application.Managers.AutocatManager(gamePageMock);

            expect(autocatManager.game).toEqual(gamePageMock);
        });
    });
});
