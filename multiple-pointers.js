// Multiple Pointers: 
// It is very efficient in traversing over the array or string as it uses multiple pointers to traverse. It has minimal space complexity as well.

// However for best complexity, the array recived as input should be sorted. Otherwise we have to sort it which eats up the O(nlogn) already, so best case will only be of nlogn  complexity.

// How we use pointers? 
// Pointer acts like index of the array which moves as we increment or decrement its value. Hence it navigate over the array. If we use two pointers and place it on the extremes of the array i.e,  PointerL = 0 and PointerR = array.length-1 , So we can easily traverse the array as they move towards each other indicating the values of the indices they belong.

// In which question does these pointers used?
// eg, 1. SumZero : find those two values from the array which gives zero if they are adds up.
sumZero([-3,-2,-1,0,1,2,3])  // [-3,3]
sumZero([1,2,3])  // undefined

//    2. Triplet: find three elements which gives zero if they are added together.

findTriplet([-3,-2,-1,0,1,2,3])  // [-3,1,2] , [-3,0,3] etc

//   3.  Simialer to triplet : Find those 3 no.s which gives the target no. after adding.
let a = [-3,-2,-1,0,1,2,3];
checkTriplet(a,5)  // [2,3] 

//   4 .find i and j in the array to satisfy :   | arr[i] - arr[j]  | + |i - j| = maxValue   // asked in OYO Interviews

let a = [-3,-2,-1,0,1,2,3];
maxValue(a)  // 12  | 3 -(-3) | + | 0 - 6 | 

...................................................................................................................................................................

// Solution 1:  for sumZero

function sumZero(a) {
  for(i=0; i< a.length ; i++) {
     for(j=i+1; j <a.length; j++) {
        if(a[i] + a[j] === 0 ) {
           return [a[i], a[j] ];
        }  
     }
  }
}
  // O(n**2)T and O(1)S
// Solution two: 
function sumZero(a) {
  let left = 0;
  let right = a.length -1;
  while(left < right) {
    let sum = a[left] + a[right];
    if(sum === 0 ) return [a[i], a[j] ];
    else if (sum < 0) left++;
    else right--;
  }
}
// O(n)T and O(1)S  // Better solution 

// However if we want to save all those combinations which give the sumZero can be obtained from the array then we have to create an auxiliary object or array which will contain our combinations. Code will be..

function sumZero(a) {
  let left = 0;
  let right = a.length -1;
  let combos = [];
  while(left < right) {
    let sum = a[left] + a[right];
    if(sum === 0 ) combos.push([a[left], a[right] ]) ;
    else if (sum < 0) left++;
    else right--;
  }
  return combos;
}

// we will get all the combinations of the sumZero possinble in the array, if not, will return empty array. If code does not run, Feel free to raise the issue.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Multiple pointer can also be used to count Unique values from a sorted array. It will return the no. of unique number used in the array. for eg,

uniqueValue([1,1,2,2,3,4,4,5,5])  // 5 i.e, 1,2,3,4,5
uniqueValue([1,1,1,1,1,1,1,1,5])  // 2  i.e, 1,5
uniqueValue([])  // 0
uniqueValue([-6,-4,-1,0,4,5,6])  // 7 every one is different

// So code can be: 
function uniqueValue(arr) {
  if( arr.length === 0) return 0;
  let pointer = 0;
  for(let counter = 1; counter < arr.length; counter++) {
      if(arr[pointer] !== arr[counter]) {
          pointer++;
          arr[pointer] = arr[counter];
      }
   }
   return pointer + 1;
}

let a = [1,2,2,2,3,3,3,3,5,6,6,6,8,8,8,9,9,10,11,12]; // 10
let b = [1,1,2,2,3,3,4,4,5,5]  // 5
let c = [1,2,3,4,5,6,7,7,7,7,7]  // 7
let d = []; // 0

// we can also do it by using While loop: 

function uniqueElements(arr) {
    if(arr.length === 0 ) return 0;
    let pointerL = 0;
    let pointerN = 1;
    while(pointerL < arr.length && pointerN < arr.length) {
        if (arr[pointerL] !== arr[pointerN] ) {            
            pointerL++;
            arr[pointerL] = arr[pointerN];            
        }  
        pointerN++;      
    }
    return pointerL+1;
}

Both are O(n)T and O(1)S

--------------------------------------------------------------------------------------------------------------------------------------------------------------------











