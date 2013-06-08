100 doors - a very old kata
---------------------------

You have 100 doors in a row that are all initially closed. You make 100 passes 
by the doors. The first time through, you visit every door and toggle the door 
(if the door is closed, you open it; if it is open, you close it). The second 
time you only visit every 2nd door (door #2, #4, #6, ...). The third time, 
every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th 
door.

This isn't a very hard problem but the end result is interesting the doors that
are at perfect square integer index numbers 1 (1*1), 4 (2*2), 9 (3*3), etc. I
went on little step further an made it n doors.i

It would be interesting to do this using a bitfield.

### A Kata: ###

This is part of a series of personal [Code Katas][katas]. So this code probably
shouldn't see the light of day. But, if you're looking to learn these projects 
are liscenced under the [WTFPL][WTFPL], so go for it. Also if you see bugs, don't 
hesitate to submit an issue!

[katas](http://en.wikipedia.org/wiki/Kata_%28programming%29)
[WTFPL](http://www.wtfpl.net/)

### Testing: ###

compile the program

    makem

then run the result with the number of doors

    ./100_doors 20
