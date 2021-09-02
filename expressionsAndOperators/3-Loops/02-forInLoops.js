/*
FOR IN LOOPS
*/

let student = { name: 'Peter', awesome: true, degree: 'javascript', week: 1 };

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british short hair', 'burnmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    console.log(cat)
    console.log(catArray[cat]);
}

// lets right a for in loop trhat capatilizes the first letter of a name

myName = 'jaylen';
let capName;

for (n in myName) {
    if (n == 0) {
        capName = myName[n].toUpperCase
    } else {
        capName += myName[n].toLowerCase
    }
}
console.log(capName)


