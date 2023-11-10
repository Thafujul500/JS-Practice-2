// Js variables, Function,Object

console.log('I love JS');
console.log(4 + 4)

var a = 10;
var b = 20;

const c = a + b;
console.log(c)
console.log('c');
console.log(c);

d = 4;
e = "4";
f = 'this';
g = false;
h = {};
i = [10,20,3,0];
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);

var number = {
    city : "Saidpur",
    village : "Nayatole",
    college : "Saidpur college",
    school : "Saidpur technical",
}

number.Zip = 1220;

console.log(number["Zip"]);
console.log(number);

number.school = "SUNFLOWER";
console.log(number);

console.log(number["school"]);
number.city = "Rajshahi";
console.log(number);
number.capacity = "400 KW";

number.capacity = "500 KW"
number.country = "Bangladesh"
number.country = "India"

console.log(number);

var arry = [1,2,3,4,5,6];
console.log(arry);
arry.push("Zihad")
arry.pop()
var len = arry.length;
console.log(len);
arry.unshift("First")
var len = arry.length;
arry.slice(1,2);
var notun = arry.splice(1,2);
arry.slice(1,2);
var amar = arry.slice(1,2)


console.log(amar);
console.log(notun);
console.log(arry);
console.log(55);
console.log("I love BD");

// New

console.log("I am a Programmer");
console.log(99);

var mamurBata = "Ziahd";
console.log(typeof mamurBata);

var num = 20;
console.log(typeof num);

var trueOrFalse = true;
console.log(typeof trueORFalse);

var amarNam = "Thafujul Islam is my full name. I am a student of Univrsity of Rajshahi. I want to be a programmer In my future.";

amarNam = "Tutul"
amarNam = "Nishad"
amarNam = "Johan"
amarNam = "Firoj"
console.log(amarNam);

var low = amarNam.toLocaleLowerCase();
console.log(low)
console.log("-----------------")

console.log(amarNam.toLocaleLowerCase())

console.log("-----------------")
var high = amarNam.toLocaleUpperCase();
console.log(high);
console.log("-----------------")

console.log(amarNam.toLocaleUpperCase());

var posi = amarNam.indexOf("Thafujul");
console.log(posi);

var sp = amarNam.split(" ");
console.log(sp);


var num1 = "25.25";
var num2 ="30.75";

num1 = parseFloat(num1);/parseInt(num1)
num2 = parseFloat(num2);/parseInt(num2)

console.log("Tha sum of two number is : " + (num1 + num2));

console.log(num1 + num2);

var myNumber = "20";
myNumber = parseInt(myNumber);
console.log(typeof myNumber);

var sum = myNumber + 20;
console.log("Tha sum is : ", sum);

var myNumber = 20;
myNumber = ""+myNumber;
console.log(myNumber == 20);
console.log(myNumber === 20);

console.log(typeof myNumber);

var theNumber = -40;
var absNumber = Math.abs(theNumber);
console.log(absNumber);

var roundNumber = 40.999;
console.log("The round number is that :  " + Math.round(roundNumber));

var floorNumber = 50.99;
console.log("The floor number is that :  " + Math.floor(floorNumber));

var ceilNumber = 60.11;
console.log("The ceilling number is that :  " + Math.ceil(ceilNumber));

var result = Math.random();


console.log("my funny random number is that : ", Math.round(Math.random() * 100));

var amartime = new Date();
console.log(amartime);

var teaLine = [
    "zihad0" ,"Firoj1","Maruf2", "Labib3","Tamim4","Dhiman5","Safi6","Jaman7","Shomapto8"
]

var position = teaLine.indexOf("Jaman7");

console.log("The position is that : " + position);

teaLine.push("Thafujul");
teaLine.pop();

teaLine[0] = "Nishad0";

console.log("Privious arry : ", teaLine);
console.log("Privious arry : ", teaLine[0]);

console.log("spliced arry : ", teaLine.splice(2,6));

console.log("Last arry : ", teaLine);

console.log(teaLine.slice(3));

// slice = (start Element, end Element less then 1)
// splice = (start Element, Total Number of Element)

var arr = [];
arr[0] = "zihad";
arr[1] = "thafujul";
arr[2] = "islam";


console.log(arr);

arr.push("Maruf","Tahsan","Billah")
console.log(arr);
var position = arr.indexOf("islam")
var lenth = arr.length;
console.log(position);
console.log("The position is that : ",lenth);

var shift = arr.shift()
console.log(shift);
console.log(arr);
var unshift = arr.unshift("I am the firsh boy in the world.")
console.log(arr);

var teaLine = [
    "zihad0" ,"Firoj1","Maruf2", "Labib3","Tamim4","Dhiman5","Safi6","Jaman7","Shomapto8"
]

var slice = teaLine.slice(2,5);
console.log(slice);
console.log(teaLine);

var splice = teaLine.splice(2,5);
console.log(splice);
console.log(teaLine);


for(var i = 0;i <= 100;i++){
    console.log("I love you "+ i);
}

var myFnd = [
    "Thafujul","Zihad","Nishad","Labib","Akash","Ridoy"
]

for( i = 0; i <= myFnd.length -1; i ++){
    console.log("first friend is : "+ myFnd[i]);
}

            //    Function



function fa(a){
    console.log( "Tha result is that : ", a * a );
    console.log('I can do sum');
    
}

fa(4)
fa(5)
fa(6)
fa(7)
fa(8)
fa(9)
fa(10)

function fa(){
    console.log( "Tha result is that : ");
}
fa();


function doubleIn(num){
    mul = num * 2;
    return mul;
}


var mySum = doubleIn(2);
mySum = doubleIn(4);
mySum = doubleIn(6);
console.log(mySum);

function add(num1,num2){
    var mot = num1 + num2 ;
    return mot;
}

var tor_sum = add(100,200);
console.log(tor_sum);



                //  Object

var student = {
    Name : "Thafujul",
    Roll : 23,
    Class : 7,
    Section : "Blue",
    School : "Saidpur International School.",
    Address : "Nayatola DIB Road"


}

student.Name = "Zihad"
student.Alaka = "talaimary"
student.Section = "red"
student.Parents = "Baba and Ma"
console.log(student);
var amarClass = student.Class;
console.log("Amar classer nam holo " + amarClass);

let age = 10;
age = 12;
age = 15;
console.log(age);


var ages = 10;
ages = 12;
ages = 15;
console.log(ages);

