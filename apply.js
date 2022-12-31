// change kora use let 
// constant  jono use const

// leap year 
function leapYear(year)
{
    if((year % 4 == 0) && ( year % 100 !=0) || (year % 400 == 0))
    {
        console.log(year + " is a leap Year");
    }
    else
    {
        console.log(year + " is not a leap Year");
    }
}
// let year = prompt("year:" );
leapYear(2000);

function fact(num)
{
    var fact =1 ;
    var i=1;
    while(i<=num)
    {
        fact*=i;
        i++;
    }
    console.log(fact);
}
fact(5);

// Recursive
// factorial
function factorial(num)
{
    if(num == 0)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}
var result =factorial(5);
console.log(result);

// fibonacci
function fibonacci(num)
{
    var fibo =[0,1];
    for(var i=2;i<=num;i++)
    {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
 var result =fibonacci(6);
 console.log(result);

 function fibo(num)
{
   if(num==0) {return 0;}
   else if(num == 1) {return 1;}
   else { return fibo(num-1) + fibo(num-2);}

}
 var result =fibo(6);
 console.log(result);

 function fibonacciSerie(n)
 {
    if(n==0) return [0];
    else if(n==1) return [0,1];
    else 
    {
        console.log(1 );
        var fibo1 = fibonacciSerie(n-1);
        // console.log(fibo);
        var nextElement = fibo1[n-1]+fibo1[n-2];
        fibo1.push(nextElement);
        return fibo1;

    }
 }
 var result= fibonacciSerie(6);
 console.log(result);

//  prime number
function prime(n)
{
    for(var i = 2 ;i<n; i++)
    {
        if(n % i == 0)
        {
            return "not a prime number";
        }
    }
    return "number is a prime";
}
var result = prime(25);
console.log(result);

// max
var business =850;
var ministar =650;
var sochib =950;
var max = Math.max(business,ministar,sochib);
console.log(max);

// array sum
var number = [45,65,78,12,19,17];
var sum = 0;
for(var i=0;i<number.length;i++)
{
    sum += number[i];
}
console.log(sum);

// array duplicate
var num =[3,7,9,3,7,2,7,9,19];
var uniqueArray=[];
for(var i=1;i<num.length;i++)
{
    var element =num[i];
    var index = uniqueArray.indexOf(element);
    if(index == -1)
    {
        uniqueArray.push(element);
    }
}
console.log(uniqueArray);

// count of word
var speech ="I     am a good  person. I dont't snore at night";
var count =0;
for(var i=0;i<speech.length;i++)
{
    var char = speech[i];
    if(char == " " && speech[i-1]!=" ")
    {
        count++;
    }
}
count++
console.log(count);

// reverse
var speech ="I am a good  person. I dont't snore at night.";
var char = "";
for(var i=speech.length-1;i>=0;i--)
{
     char += speech[i];
}
console.log(char);


var tealine=["kalam",'salam',"Balam","kabir",'shakib'];
var element = tealine[4].length;
console.log(element);