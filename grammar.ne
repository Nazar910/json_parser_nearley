jsonValue -> object | array | string | boolean | number

object -> "{" string ":" jsonValue "}" {% ([,key,,value]) => ({ [key]: value[0] }) %}

array -> "[" jsonValue "]" {% ([,val]) => val %}

string -> "\"" [a-zA-Z0-9]:* "\"" {% ([,str]) => str.join('') %}

boolean -> "true" {% () => true %} |
    "false" {% () => false %}

number -> [0-9] {% d => Number(d[0]) %} |
    [1-9] [0-9]:+ {% d => Number([d[0], ...d[1]].join('')) %}
