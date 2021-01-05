var  fruit = 'watermelon';
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
   case 'bananas' :
    console.log('Mangoes, papayas and bananas are $4.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}
///another problem

var item = "Apples";

switch (item) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + item + '.');
  }
  
  console.log("Is there anything else you'd like?");

  //another problem
  var num = 40;
  switch(num){
     case 10 :
         console.log(" I am 10"); 
         break;
     case 20:
             console.log('I am 20')
     break;
     case 30 :
         console.log(" I am 10"); 
         break;
     case 40:
             console.log('I am 40')
     break;
     case 50 :
         console.log(" I am 10"); 
         break;
     case 60:
             console.log('I am 20')
     break;

     default : 
     console.log('I dont know who you are');


  }


  
//   var foo = 1;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }
  

var action = 'say_hello';
switch (action) {
  case 'say_hello':
    var message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    var message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}