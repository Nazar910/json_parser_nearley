// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "root", "symbols": ["object"]},
    {"name": "object$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "object$ebnf$1", "symbols": ["object$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "object$ebnf$2", "symbols": [/[a-zA-Z]/]},
    {"name": "object$ebnf$2", "symbols": ["object$ebnf$2", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "object", "symbols": [{"literal":"{"}, {"literal":"\""}, "object$ebnf$1", {"literal":"\""}, {"literal":":"}, {"literal":"\""}, "object$ebnf$2", {"literal":"\""}, {"literal":"}"}], "postprocess": ([,,key,,,,value]) => ({ [key.join('')]: value.join('') })}
]
  , ParserStart: "root"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
