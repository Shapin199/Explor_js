console.log(47);

var applePrice =190;
console.log(applePrice);

var name ="Mohammad Shapin";
console.log(name);

console.log(typeof 47);

var applePrice =190;
console.log( typeof applePrice);

var name ="Mohammad Shapin";
console.log(typeof name);

var red = true;
console.log(red);

var yellow=false;
console.log(yellow);

var Name ="Mohammad Irtisum";
console.log(Name.toLocaleUpperCase());
console.log(Name.toLocaleLowerCase());
console.log(Name.indexOf("Irtisum")); //কোথায় আছে জানার জন্য {-১ মানে নাই}

// var pr = I love my mom;
// console.log(pr.split("I"));

var number1 =25;
var number2 =15.5;
console.log(number1+number2);

var number1 =25;
var number2 ="15.5";
number2 =parseFloat(number2);
console.log(number1+number2);

var number1 =25;
var number2 ="15.5";
number2 =parseInt(number2);
console.log(number1+number2);

var number1 =25;
var number2 ="15.5";
number2 =+(number2);//sortcut
console.log(number1+number2);

var number1 =25;
number1 =''+(number1);
console.log(number1);
console.log(typeof number1);

var number1 =0.1;
number2 =0.2;
var total = number1+number2;
total=total.toFixed(1);
console.log(total);

var price1='Justin';
var  name ="Biebar";
var result = price1 +" " +name;
console.log(result);

var number =-5;
var absolutenumber = Math.abs(number);
console.log(absolutenumber);

var number =5.45;
var result =Math.round(number);
console.log(result);

var number =5.59;
var result =Math.round(number);
console.log(result);

var number = 5.01;
var result =Math.ceil(number);//besi jonno
console.log(result);

var number = 5.99;
var result =Math.floor(number);//kom ar jonno
console.log(result);

var number = Math.random()*100;
var result =Math.round(number);
console.log(result);

var price =9;
if(price<10)
{
    console.log("Yes");
}
else{
    console.log("No");
}

var jobpaiso =true;
var savingAmount =5000;
if(jobpaiso == true && savingAmount>200000)
{
    console.log("biye koro");
}
else
{
    console.log("pora koro biya");
}

//date and time
var date =new Date();
var result = Math.round(number);
console.log(date);

var date =new Date('2010-04-20');
var result = Math.round(number);
console.log(date);

// Array
var friendsAge=[10,12,19,15];
console.log(friendsAge);

console.log(friendsAge[0]);

var Ramim = friendsAge[1];
console.log(Ramim);

friendsAge[3] = 21;
console.log(friendsAge);

var position = friendsAge.indexOf(19);
console.log(position);

friendsAge.push(9);
console.log(friendsAge);

console.log(friendsAge.length);

console.log(friendsAge);
friendsAge.pop();      //bad da
console.log(friendsAge);

friendsAge.unshift(5); ///frist add kora
console.log(friendsAge);

friendsAge.shift();//frist array bad
console.log(friendsAge);

//string
var tealine=["kalam",'salam',"Balam"];
console.log(tealine);

tealine.push("jalam");
console.log(tealine);

tealine.pop();
console.log(tealine);

tealine.unshift('kabir');
console.log(tealine);

tealine.shift();
console.log(tealine);

var part = tealine.slice(1);
console.log(part);

var tealine=["kalam",'salam',"Balam","kabir",'shakib'];
var part = tealine.slice(1,4);
console.log(part); 

//loop
var nums = [55,66,77,88,99,11,44];
for(var i=0;i<nums.length;i++)
{
    var element = nums[i];
    console.log(element);
}

// function
function jarim()
{
    console.log("Good boy");
    console.log("good job");
}
jarim();

function doubleIt(num)
{
    var double =num*2;
    // console.log(double);
    return double;
}
var frist = doubleIt(19);
var seconed = doubleIt(199);
var total = frist + seconed;
console.log(frist,seconed);
console.log(total);

function add(num1,num2)
{
    var sum = num1 + num2;
    return sum;
}
var sum = add(15,19);
console.log(sum);

// object
var student = {id:121, phone:1745, name:"Shakib"};
var student2 = { id:131, phone:457, name:"Mahi"};
console.log(student);

console.log(student2);

console.log(student.phone);
// or
var Name =student.name;
console.log(Name);
// or
var phoneNo =student["phone"];
console.log(phoneNo);
// or
var phone3 ="phone";
var phoneNo = student2[phone3];
console.log(phoneNo);
// update 
student2.phone = 534463;
console.log(student2);
// add
student2.cinema = "orni22";
console.log(student2);

//dom == document object Model