// here we have used helper function bunarySearch to find the squareRoot.

var mySqrt = function(x) {
    return binarySearch(x, 1, x);
};

const binarySearch = (x, start, end) => {
    if (start > end) return start - 1;

    let mid = start + Math.floor((end - start)/2);

    if (mid * mid > x) {
        end = mid - 1;
        return binarySearch(x, start, end);
    } else {
        start = mid + 1;
        return binarySearch(x, start, end);
    }
}

mySqrt(16);  // 4
