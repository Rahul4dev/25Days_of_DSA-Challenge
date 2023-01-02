// Geometric series includes a constant a and power incrementor r which increment till n and give the expression and series as follows:
// nth value,   An = a*r**n-1
// sum of series till n , Sn = (ar**n-1 - a) / r -1 
// series : a ar ar**2  ar**3 ar**4 ....  ar**n-1
// hence is either a or r equals zero, we get whole series a zero. 

// In codes, we can express it as: 
function gFSeries(a,r,n) {   
    if(n === 0) return a;
    return a*(r**(n-1));   
}
// complexity:  O(1)T and O(1)S
gFSeries(1,2,8);  // 128

// if we want all the values till n

function gpseries(a,r,n) {
  let bag = [];
  let i = 0;
  while( i < n ) {
    bag.push(a*(r**i));
    i++;
  }
  return bag;
}
// complexity: O(n)T and O(n)S 
gpSeriesTill(2,3,8)  // [2, 6, 18, 54, 162, 486, 1458, 4374]
gpSeriesTill(1,2,10)  // [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
// can you tell me the output we get from :  gpSeriesTill(1,1,10)  // ??

// Sum Code can be like this: 

function gpSumN(a,r,n) {
    let sum = 0;
    let i = 0;
    while(i < n) {
        sum += a*(r**i);
        i++;
    }
    return sum;
}

gpSumN(2,2,10);   // 2046
// Complexity: O(n)T and O(1)S

// using Recursion: 

function gFSeries(a,r,n) {   
    if(n === 1) return a;
    return r*gFSeries(a,r,n-1);
}

gFSeries(1,2,3);  // 4  
gFSeries(1,2,8);  // 128

// complexity: O(N)T and O(N)S as it consume n+1 call stack space to execute recurring functions.
