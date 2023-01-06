// iiFE
// (function(){
//     // sob condication ;
// })();

// argument

// function getFullName(Fastname,lastname){
//    // console.log(arguments);
    
//  let fullName = " ";
//  for( let i = 0 ;i < arguments.length; i++)
//  {
//     const  namepart = arguments[i];
//     fullName += " " + namepart;
//  }
//  return fullName;
// }
// const name = getFullName("Rapin","Tasim","ramim")
// console.log(name);


var number = Math.random()*100000;
var result =Math.round(number);
console.log(result);

const firstName = "Ramim";
const lastName = "Tasim";
const fullName = firstName + " " + lastName + "is good boy" ;
// Es6
const firstName2 = `${firstName} ${lastName}  is good boy`;
console.log(firstName2);

const muliLine = "I'm a good student\n" + "Ramim is say that bad\n";
console.log(muliLine);

// Es6
const muliLine2 = `I love you
   How are you`;
 console.log(muliLine2);

//  Arrow function Es6
const doubleIt = num => num * 2;
const add = (x,y) => x+y;
const vd = () => 5;
// const bisahal = (x,y) => {
//     const c = x+y;
//     ----
//     // return c;
// }
const result1 = doubleIt(9);
console.log(result1);

// concat Array
const ags = [10,23,45,43];
const ags1 = [16,73,65,23];
const ags2 = [90,27,44,33];

const allAge = ags.concat(ags1).concat([5]).concat(ags2);
console.log(allAge);

// Es6
const allAge2 = [...ags,...ags1,5,...ags2];
console.log(allAge2);

const mix = Math.max(...ags);
console.log(mix);

// class construct Object
// class student{
//     constructor(){
//         this.id = 1;
//         this.name = "Ramim";
//     }
// }

// class construct Object
class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "T ab school";
    }
}
const student1 = new Student(12,"Shakib");
const student2 = new Student(43,"Rakib");
console.log(student1,student2);
console.log(student1.name,student2.name);

class Parent{
    constructor(){
        this.fatherName = "Denny";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return  this.name + " " + this.fatherName;
    }
}

const baby = new Child("Tom");
const baby2 =new Child("Jerry");
console.log(baby.getFullName());
console.log(baby2);