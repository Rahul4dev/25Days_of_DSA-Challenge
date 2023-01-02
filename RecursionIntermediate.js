// Since we know that recursion is another type of looping method, lets talk about its complexity over time and space.
// As pure recursion, Time Complexity is O(2**n)T as it operates two times operations in every new operation. so it is not good and very high complexity to follow.
// As far as the space complexity is concerned, it it O(n) as it takes n times the call stack space to run the function.

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

How?? 
  // Time complexity improved to O(n) as now it will calculate f(n) only one time and store it to use it again if needed which takes constant time. 
  // Space comlexity remains the same, as even though we used HT but it only take n space, similar to the call stack, so both adds up to make again O(n)S . 
