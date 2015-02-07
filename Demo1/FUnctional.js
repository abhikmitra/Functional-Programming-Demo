/**
 * Created by abmitra on 2/6/2015.
 */
/*
 • Start at 10
 • Sing the following for each number down to 1:
 — X bottles of beer on the wall
 — X bottles of beer
 — Take one down, pass it around
 — X-1 bottles of beer on the wall
 • Subtract one from the last number and start over with the new value
 • When you finally get to the number 1, sing the following last line instead:
 — No more bottles of beer on the wall
 */
var _ = require("lodash");

function lyricSegment(n) {
    return _. chain([])
        . push(n + " bottles of beer on the wall" )
        . push(n + " bottles of beer" )
        . push("Take one down, pass it around" )
        . tap(function(lyrics) {if (n > 1)
            lyrics. push((n - 1) + " bottles of beer on the wall." );
        else
            lyrics. push("No more bottles of beer on the wall!" );
        })
        . value();
}
function song(start, end, generateLyricsFor) {
    return _. reduce(_. range(start, end, - 1),
        function(acc, n) {
            return acc. concat(generateLyricsFor(n));
        }, []);
}
console.log(song(9,0, lyricSegment));
