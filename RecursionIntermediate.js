// Since we know that recursion is another type of looping method, lets talk about its complexity over time and space.
// As pure recursion, Time Complexity is O(2**n)T as it operates two times operations in every new operation. so it is not good and very high complexity to follow.
// As far as the space complexity is concerned, it it O(n) as it takes n times the call stack space to run the function.

// we know fibonacci series which gives sum of prev two value of the N where at n=0 f(n)= 0 and at n=1 f(n) = 1. in code: 

function fibonacci(n) {
  if(n<=1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

// In fibonacci series, call Stack keep on adding new function and it also compute same f(n) multiple times which degrades the complexity.
// So we need to optimize the code and add new data Structures and algorithms, in order to improve its complexity..

// By using Hash Table: to store the f(n) and use it if it again wanted for the function. Code: 

function htFibonacci(n) {
  let ht = {0:0, 1:1};  // added initial values
  if( n in ht) return ht[n];
  else {
    ht[n] = htFibonacci(n-1) + htFibonacci(n-2);
    return ht[n];
  }
}

// Here we can see, every time f(n) come in call stack, it first check in the ht and if not found, it will calculate and store it in ht. 
// At last when the call stack filled with the final value of required f(n) it will imidiately retrive the value through its key which takes constant time like an array, hence we have improved our comlexities.

// How?? 
  // Time complexity improved to O(n) as now it will calculate f(n) only one time and store it to use it again if needed which takes constant time. 
  // Space comlexity remains the same, as even though we used HT but it only take n space, similar to the call stack, so both adds up to make again O(n)S . 

// IF we want to improve our complexity even further, we can use loops , Code:

function fibonacciLoop(n) {
    if(n <= 1) return n;  // edge case
    let prev = 0;
    let curr = 1;
    let count = 1;
    let next;
    while(count < n) {
      next = prev + curr;
      prev = curr;
      curr = next;
      count++;
    }
    return curr;
 }
 
 fibonacciLoop(5);  // 5
// Hence we got the complexities improved:
 // Time Complexity is O(n) as it loops over n value and find next value.
 // Space Complexity is O(1) as we are niether using auxiliary space in form of array of hash table, nor used recursion to call multiple functions in the call stack. 
 // So this is the best possible complexity of the fibonacci Algorithms.

// So if we want to know the fibonacci series till n then we can save the value of next in the bag/container/ array so that we can return it. Code:

function fibonacciTill(n) {
    let bag = [0,1];
    if(n <= 1) return bag;
   
    let prev =0;
    let curr = 1;
    let count =1 ;
    let next ;
    while( count < n) {
        next = prev + curr;
        bag.push(next);
        prev = curr;
        curr = next;
        count++;
    }    
    return bag;
}

fibonacciTill(10);   //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

------------------------------------------------------------------------------------------------------------------------------------------------------------

// Similarly, if we consider a function which takes an array as input and pass its sum, but if elements of the array are nested inside another array, then it give sum of that nested array raised to the power to number represents how far that array is nested : e.g, 

let a = [1,2,[3,4],[[2]]];  // 116   1+2+7**2 + (2**3)**2
let b = [1,2,3,4] ; // 10   1+2+3+4
let c = [1,[2],[3],[[4]]];  // 4110

// so code will be: 

function sumPower(array, power =1 ) {
  let sum = 0;
  for( const element of array) {
      if(Array.isArray(element) {
          sum += sumPower(element, power+1);
      } else {
          sum += element;
      }
  }
  return Math.pow(sum, power);
}

sumPower(a);  // 116 
let d = [3,[1,2],7,[1,[2]]];  // what will be the output??

// If we talk about the complexity of the code: 
// O(N)T where N is number of element in the array and subarray. 
// O(D)S where D is nunber of depth/deep nesting done in the array.
