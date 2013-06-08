game_of_life.js - an anagram finder using node
------------------------------------------

game_of_life.js takes a array of '*'s and '.' from stdin and writes the 
successive generations of Conway's Game of Life to a file.

### A Kata: ###

This is part of a series of personal [Code Katas][katas]. So this code probably
shouldn't see the light of day. But, if you're looking to learn these projects 
are liscenced under the [WTFPL][WTFPL], so go for it. Also if you see bugs or
experience bugs, don't hesitate to submit an issue!

[katas](http://en.wikipedia.org/wiki/Kata_%28programming%29)
[WTFPL](http://www.wtfpl.net/)

### Testing: ###

run the program with a optional number of generations:

    node game_of_life -g 15 result.txt

then create your grid (make sure to keep the same width as you add rows)

    Please enter your grid:
    ...*.............
    .*.*.............
    ..**.............
    .................
    .................
    .................
    .................

then open your file and view the generations go by! or [research more cool 
shapes][wp].

[wp](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns) 

