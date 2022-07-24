const testCases = [
    {
        jsonStr: '{"foo":"bar"}',
        expected: {
            foo: 'bar'
        }
    },
    {
        jsonStr: '"foo"',
        expected: 'foo'
    },
    {
        jsonStr: '[{"foo":"bar"}]',
        expected: [{
            foo: 'bar'
        }]
    },
    {
        jsonStr: '1',
        expected: 1
    },
    {
        jsonStr: 'true',
        expected: true
    },
    {
        jsonStr: 'false',
        expected: false
    },
];

module.exports = { testCases };
