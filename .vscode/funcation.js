// iiFE
// (function(){
//     // sob condication ;
// })();

// argument

function getFullName(Fastname,lastname){
   // console.log(arguments);
    
 let fullName = " ";
 for( let i = 0 ;i < arguments.length; i++)
 {
    const  namepart = arguments[i];
    fullName += " " + namepart;
 }
 return fullName;
}
const name = getFullName("Rapin","Tasim","ramim")
console.log(name);