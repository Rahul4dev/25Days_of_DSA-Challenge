// In simple terms, recursive function calls itself during the execution of the function and thus the fucntion calls itself till it meets the base condition/case. Hence it act like a loop. e.g, 

function countDown(num) {
  if(num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);  // 5 4 3 2 1 All done!
// i.e, it loop over all the num till the num = 0;
// we can also write this using for-loop or while loop,
function countDown(num) {
  for(let i=num; i>=0 ; i++) {
      console.log(i);
  }
  return "All done!";
}
countDown(5);  // 5 4 3 2 1 All done!


// So, In Recursion we have to consider two important thing, first, the base case where the function execution ends and the repeatetive input it takes during the function execute itself in call stack.

---------------------------------------------------------------------------------
// write a function to print positive numbers till N  without using any loop

function countTillN(N) {
  let container = "";
  print(n);
  console.log(container);
  function print(n) {
    if(n==0) return 0;
    print(n-1);
    container += n + "";
  }
  return;
}

printTillN(4) // 1 2 3 4 

// we can write it as 

function  printNos(N, str = ''){
        //code here
        if(str == ''){
            str = `${N}`;
        } else {
            str = `${N} ` + str;
        }
        if(N == 1){
            console.log(str);
            return;
        }
        this.printNos(N-1, str);
}

printNos(10);

---------------------------------------------------------------------------------

// Similarly, 
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num -1);
}
sumRange(3); // 6 
// as 3 + sumRange(2) = 3 + 2 + sumRange(1) = 3 + 2 + 1 = 6  
// Here base case is if condition where it return that op which does not depend on the function. Second return gives the repetetive input till num reaches to 1.

// Can you tell me the output of 
sumRange(5);  // ?
// if you know, it is a summation method. so what is 5 summation ?

----------------------------------------------------------

// Similarly we can write factorial method using Recursion 

function findFactorial(num) {
  if(num ==== 1 ) return 1;
  return num*findFactorial(num-1);
}

findFactorail(3); // 6  Only number which gives same output for sumation and factorial.
findFactorail(5); // 120

// so what will be the output of..
findFactorail(7);

// So we have just 3 line code for the fatorial and sumation function

--------------------------------------------------------------------
// Quest: find odd numbers form an array
function findOdds(arr) {
    let result = [];
    function helper(input) {
        if(input.length === 0) return [];
        if(input[0] % 2 !== 0 ) {
            result.push(input[0]);
        }
        helper(input.slice(1));
    }
    helper(arr);
    return result;
}

findOdds([1,2,3,4,5,6,7,8,9]);  // [1, 3, 5, 7, 9]
// O(n)T  O(n)S

// we can also write it as 

function collectOdd(arr) {
   let newArr = [];
   if(arr.length === 0) return newArr;
   if(arr[0] % 2 !== 0 ) {
      newArr.push(arr[0]);
   }
   newArr = newArr.concat(collectOdd(arr.slice(1)));
   return newArr;
}

collectOdd([1,2,3,4,5,6,7,8,9]);
----------------------------------------------------------------------------------------------------------------------------------------
// POWER 
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL 
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE 
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
