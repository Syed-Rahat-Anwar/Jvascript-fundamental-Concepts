var friendAge = [12,15,24,25,27,28,30,31];
var position = friendAge[5];
position= 66;
console.log(position);

console.log(friendAge[5]);


var ages = [21,32,24,25,27,28,30,41];

var agePosition = ages[3];
console.log(agePosition);
ages[7]= 91;
console.log(ages);


//index of

var ages = [21,32,24,25,27,28,30,41];

console.log(ages.indexOf(25));


var ages = [21,32,24,25,27,51,30,41];

var index = ages.indexOf(51);

console.log(index);


var studentName = ['mark', 'jhon', 'angelina', 'ryan dhal', 'evan you'];

studentName[0] = "steve";
console.log(studentName);

var studentPosition = studentName.indexOf('jhon');
console.log(studentPosition);


var ages = [21,32,24,25,27,28,30,41];

var findPosition = ages.indexOf(91);
console.log(findPosition); 