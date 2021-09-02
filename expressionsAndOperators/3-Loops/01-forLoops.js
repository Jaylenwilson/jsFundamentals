/*
Loops

*/

/*
loops offer a quick and easy way tpo do something repeadetly there are many kinds of loops but they all do roufghly the same thinh
for statement
do while
while
labeled
break
continue
for in
for of
.foreach
.map
*/

//loopp structure: a) creation of an indexing variable b) a run condition c) change to the indexing variable

//count from 0 -10

for (i = 0; i <= 10; i++) {
    console.log(i);
}

//loops can run infinetly they are bugs
//for (let i = 0; ; i++) {
//    console.log(i);
//}

//counts to -25 by -3 starting from 2, logs tht numbers
for (let i = 2; i >= -25; i - 3) {
    console.log(i)
}

//display the letters in a name individually

let myName = "jaylen"
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i])
}

// for loops can use lots of variables
let start = 2;
let aStop = Math.floor(Math.random() * 30);
let increment = 3;

for (let i = start; i <= aStop; i = i + increment) {
    console.log(i)
}


