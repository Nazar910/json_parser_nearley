root -> object

object -> "{" "\"" [a-zA-Z]:+ "\"" ":" "\"" [a-zA-Z]:+ "\"" "}" {% ([,,key,,,,value]) => ({ [key.join('')]: value.join('') }) %}
