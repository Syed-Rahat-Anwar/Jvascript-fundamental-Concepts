//object

var student1 = { id: 101, phone :1867294575, name : "karim"};
var student2 = { id: 102, phone :1840515731, name: "bappy"};

var studentName = student1.name;
var studentPhone = student2.phone;

cosnole.log(student1);
console.log(studentName);
console.log(student2);
console.log(studentPhone);


var student1 = { id: 101, phone :1867294575, name : "karim"};
var student2 = { id: 102, phone :1840515731, name: "bappy"};

var phone = student1["id"];
var name = student2["name"];
console.log(phone, name);



var student1 = { id: 101, phone :1867294575, name : "karim"};
var student2 = { id: 102, phone :1840515731, name: "bappy"};

var phonePropName = "phone";
var phone = student1[phonePropName];
console.log(phone);

//change object property value

var phone3 = student2.phone;

phone3 = 2345769;

student2["name"] ="rahat";


console.log(phone3);
console.log(student2["name"]);
console.log(student2);