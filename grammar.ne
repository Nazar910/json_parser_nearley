jsonValue -> object | array | string | boolean | number

object -> "{" "\"" [a-zA-Z]:* "\"" ":" jsonValue "}" {% ([,,key,,,value]) => ({ [key.join('')]: value[0] }) %}

array -> "[" jsonValue "]" {% ([,val]) => val %}

string -> "\"" [a-zA-Z]:* "\"" {% ([,str]) => str.join('') %}

boolean -> "true" {% () => true %} |
    "false" {% () => false %}

number -> [0-9] {% d => Number(d[0]) %} |
    [1-9] [0-9]:+ {% d => d %}
