// Divide and Conquer : 

// It involve the technique of dividing the data into smaller chunks and do our desired ops. and repeating that op on other later. This technique improves our time complexity.

// it generally used in sorting and searching as in both operations we require to traverse the whole array to find the element.

//eg.,

// Quest: Write a function to search the index of given element from an sorted array. if not present return -1;

// using array method
function search(arr,k) {
    let index = arr.indexOf(k);
    if(!index) return -1;
    return index;
}


// by for loop
function search2(arr,k) {
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === k) return i;
    }
    return -1;
}

let a = [1,2,3,4,5];
search2(a,2);  // o/p == 1

// both solution have O(n)T complexity, so we refactor it 

function search(arr,k) {
    let min = 0;
    let max = arr.length -1;
    let count =0;
    while(min < max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = arr[middle];

        if(currentElement < k) {
            min = middle + 1;
        }else if( currentElement > k) {
            max = middle - 1;
        } else return middle;
        console.log(count++);
    }
    return -1;
}

let a = [1,2,3,4,5,6,7,8];
search(a,7);   // only three counts

// here we used devide and conquer technique to diveide the array multile times so that we can compare the middle of the array with the desired element. On every division out data becomes half and seach become more convenient.

// the O(logn) which is better than O(n). This is called binary search.
