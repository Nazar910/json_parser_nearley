# json_parser_nearley
MVP to see how easy simple JSON parser can be created using [nearley](https://nearley.js.org/).
Of course, this parser is implemented for educational reasons and may not implement full JSON spec.
BTW, if you're interested there's also JSON parser grammar in [nearley repo](https://github.com/kach/nearley/blob/master/examples/json.ne)

# Prerequisites:
* understanding of [ebnf](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) form (used to describe grammar of your custom language)
* [node](https://nodejs.dev/)

# Getting started
* npm install
* npm test - to check that all units are passing
should see smth like

![image](https://user-images.githubusercontent.com/19594637/180640252-f9390716-51f9-4a8c-a6c4-bf37270d04a0.png)


# Grammar
Using nearley we can omit implementing tokenizing work and focus on features of our DSL.
[grammar.ne](https://github.com/Nazar910/json_parser_nearley/blob/main/grammar.ne)

When you finished describing your grammar in ebnf form, it is time to compile it to js:
```bash
nearleyc grammar.ne -o grammar.js
```

# Parser

Compiled grammar.js we can use to create our parser (in most cases it is tokenizer but in current case parser is implemented right in grammar.ne using [postprocessors](https://nearley.js.org/docs/grammar))

[parser](https://github.com/Nazar910/json_parser_nearley/blob/main/index.js)

# Summary

It is great to have such tools as nearley, because it gives you possibility to write high level DSL logic without bothering too much about tokenizing stuff.
This allows to drammaticcally speed up moving DSL project from your head to MVP you can test.
For example, in less than hour, current parser was ready to parse simple JSON strings.
