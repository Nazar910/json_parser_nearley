const nearley = require("nearley");
const grammar = require("./grammar.js");

function parse(str) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(str);
    return parser.results[0][0];
}

module.exports = { parse };
