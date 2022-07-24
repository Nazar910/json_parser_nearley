// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "jsonValue", "symbols": ["object"]},
    {"name": "jsonValue", "symbols": ["array"]},
    {"name": "jsonValue", "symbols": ["string"]},
    {"name": "jsonValue", "symbols": ["boolean"]},
    {"name": "jsonValue", "symbols": ["number"]},
    {"name": "object$ebnf$1", "symbols": []},
    {"name": "object$ebnf$1", "symbols": ["object$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "object", "symbols": [{"literal":"{"}, {"literal":"\""}, "object$ebnf$1", {"literal":"\""}, {"literal":":"}, "jsonValue", {"literal":"}"}], "postprocess": ([,,key,,,value]) => ({ [key.join('')]: value[0] })},
    {"name": "array", "symbols": [{"literal":"["}, "jsonValue", {"literal":"]"}], "postprocess": ([,val]) => val},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": ([,str]) => str.join('')},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "number", "symbols": [/[0-9]/], "postprocess": d => Number(d[0])},
    {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": [/[1-9]/, "number$ebnf$1"], "postprocess": d => d}
]
  , ParserStart: "jsonValue"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
