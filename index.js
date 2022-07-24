const nearley = require("nearley");
const grammar = require("./grammar.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// console.log(JSON.stringify(parser.results[0][0], null, 4));
function parse(str) {
    parser.feed('{"foo":"bar"}');
    return parser.results[0][0];
}

module.exports = { parse };
