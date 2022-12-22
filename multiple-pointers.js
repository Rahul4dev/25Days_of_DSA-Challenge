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

..........................................................................................................

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
