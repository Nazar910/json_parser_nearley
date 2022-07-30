@builtin "number.ne"

jsonValue -> object | array | string | boolean | number

object -> "{" string ":" jsonValue ("," string ":" jsonValue):* "}" {% ([,key,,value, additionaKeyPairs]) => {
    const obj = { [key]: value[0] };

    if (additionaKeyPairs) {
        additionaKeyPairs.forEach(([,k,,v]) => obj[k] = v[0]);
    }

    return obj;
} %}

array -> "[" jsonValue "]" {% ([,val]) => val %}

string -> "\"" [a-zA-Z0-9]:* "\"" {% ([,str]) => str.join('') %}

boolean -> "true" {% () => true %} |
    "false" {% () => false %}

number -> decimal {% d => Number(d[0]) %}
