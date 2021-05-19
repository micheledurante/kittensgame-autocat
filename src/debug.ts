/**
 * Entry-point for the test suite.
 * 
 * 1. Include each .ts file using the reference path directives (exclude interfaces as they won't be compiled to JS)
 * 2. Add each imported namespace to the CommonJS exports
 * 3. Require the main app in tests, e.g.
 *      ```
 *          const autocat = require('../dist/autocat');
 * 
 *          var autocatTab = new autocat.Templates.AutocatTab();
 *      ```
 */
/// <reference path="Application/Autocat.ts" />
/// <reference path="Application/Managers/AutocatManager.ts" />
/// <reference path="Templates/AutocatTab.ts" />

// CommonJS exports
exports.Application = Application;
exports.Templates = Templates;