const assert = require('assert');
const { testCases } = require('./testCases');
const { parse } = require('../index');


function generateTestCases(cases) {
    for (const testCase of cases) {
        it(testCase.jsonStr, () => {
            const actual = parse(testCase.jsonStr);
            assert.deepStrictEqual(actual, testCase.expectedObj);
        });
    }
}

describe('parser', () => {
    generateTestCases(testCases);
});
