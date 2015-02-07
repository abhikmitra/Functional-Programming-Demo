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

var lyrics = [];
for (var bottles = 10; bottles > 0; bottles-- ) {
    lyrics. push(bottles + " bottles of beer on the wall" );
    lyrics. push(bottles + " bottles of beer" );
    lyrics. push("Take one down, pass it around" );
    if (bottles > 1) {
        lyrics. push((bottles - 1) + " bottles of beer on the wall." );
    }
    else {
        lyrics. push("No more bottles of beer on the wall!" );
    }
}
console.log(lyrics.join("\r\n"));