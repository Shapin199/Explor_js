// iiFE
// (function(){
//     // sob condication ;
// })();

// argument

// function getFullName(Fastname,lastname){
//  let fullName = " ";
//  for( let i = 0 ;i < arguments.length; i++)
//  {
//     const  name = arguments[i];
//     fullName += arguments[i];
//  }
// }
// const name = getFullName("Rapin","Tasim","ramim")
// console.log(name);

// JSON
const user = {
   id :245, name:"Masud"
};
const userJson = JSON.stringify(user);
console.log(userJson);

const userFormJson = JSON.parse(userJson);
console.log(userFormJson);