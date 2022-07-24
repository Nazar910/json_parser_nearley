const nearley = require("nearley");
const grammar = require("./grammar.js");

// console.log(JSON.stringify(parser.results[0][0], null, 4));
function parse(str) {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(str);
    return parser.results[0][0];
}

module.exports = { parse };
