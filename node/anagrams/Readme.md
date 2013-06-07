anagrams.js - an anagram finder using node
------------------------------------------

anagrams.js takes a list of `\n` seperated words like the Unix Dictionary and
maps them into anagrams.

### A Kata: ###

This is part of a series of personal [Code Katas][katas]. So this code probably
shouldn't see the light of day. But, if you're looking to learn these projects 
are liscenced under the [WTFPL][WTFPL], so go for it. Also if you see bugs, don't 
hesitate to submit an issue!

[katas](http://en.wikipedia.org/wiki/Kata_%28programming%29)
[WTFPL](http://www.wtfpl.net/)

### Testing: ###

run the program piping its output to a file

    node anagrams > result.txt

then diff that file with `expected.txt`

    diff result.txt expected.txt

