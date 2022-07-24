const testCases = [
    {
        jsonStr: '{"foo":"bar"}',
        expected: {
            foo: 'bar'
        }
    },
    {
        jsonStr: '{"foo1":"bar1","foo2":"bar2"}',
        expected: {
            foo1: 'bar1',
            foo2: 'bar2',
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
        jsonStr: '123',
        expected: 123
    },
    {
        jsonStr: 'true',
        expected: true
    },
    {
        jsonStr: 'false',
        expected: false
    },
    {
        jsonStr: '{"foo123":"bar321"}',
        expected: {
            foo123: 'bar321'
        }
    },
];

module.exports = { testCases };
