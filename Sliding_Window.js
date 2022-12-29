// Sliding Window technique:

// In this technique, we create a window of given length and do the desired operation within the window and move forward to compare other window's ops result. 

// It is useful for tracking the subset of data from the given array/string etc.

// Eg.,
let a = [2,6,9,2,1,8,5,6,3];
maxSumConsecutive(a,3);  // should give 19 (8+5+6) this is the max sum of 3 consecutive no.

// its code will be: 
function maxSumConsecutive(arr,n) {
    if( n > arr.length) return null;  // edge case if window is bigger than the given array.
    let max = -Infinity;   // to tackle negative arrays
    for( let i =0; i< arr.length- n+1; i++) {
        let temp = 0;
        for( let j = 0 ; j < n ; j++) {
            temp += arr[i+j];
        }
        if (temp > max ) {
            max = temp;
        }
    }
    return max;
}

// However it is not efficient for O(n**2)T

// refactored version will be...

function maxSumConsecutiveR(arr,n) {
  if( n > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for(let i = 0 ; i < n ; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = n ; i < arr.length ; i++) {  
    tempSum = tempSum - arr[i - n] + arr[i] ;
    maxSum = Math.max(tempSum , maxSum);
  }
  return maxSum;
}
 // Second loop is our sliding window of size n , which slides on every iteration, deleting extreme left value and adding extreme right value, which save us to add all the no. again. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------    

// Hacker Rank Question: SubArray Division   birthday of Ron
// here we have to find he possible sum 'd' which can be made by adding 'm' consecutive no. from 'arr'.

function birthday(arr, d, m) {
    // Write your code here
    if(m > arr.length) return null;
    let counter = 0;
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0; i<m ; i++) {
        maxSum += arr[i];       
    }
    tempSum = maxSum;
    if(tempSum == d) counter++;
    if(arr.length === 1 && tempSum === d) return 1;
    for(let i= m ; i < arr.length; i++) {
        tempSum = tempSum - arr[i-m] + arr[i];        
        if( tempSum === d) {
            counter++;
        }
    }
    return counter;
}

let a = [1,2,1,3,2];
let b = [4]  (b,4,1) // 1
let c = [1,1,1,1,1,1]  (c,4,2) // 0
birthday(a,3,2);  // 2

----------------------------------------------------------------------------------------------------------------------------------------------------------------------    

// If we want to find the longest common prefix from the array eg,
 
let s = ["flower","flow","flight"];  // 'fl'
let ss = ["profound","program","programmer"];  // 'pro'

var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0] ; 

    var prefix = strs[0] ; 

    for(let i = 1 ; i < strs.length ; i++ ){
       while( strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1); 

            if(prefix.length == 0 ) return '' ; 
        }
   }
   return prefix ;
}; 

// OR 

var longestCommonPrefix = function(strs) {
    let current = strs[0] ;
    let temp = "" ; 
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < current.length; j++){
            if(current[j] == strs[i][j]){
                temp += current[j];
            } else {
                break;
            }
        }
        current = temp ;
        temp = "" ;
    }
    return current ;
};


