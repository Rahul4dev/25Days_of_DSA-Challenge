// Hash table are object like Data Structure




function sumToTarget(arr, target) {
    let hashTable = {};
    let neededValue;
    for(let i = 0; i < arr.length ; i++) {
        neededValue = target - arr[i];
        if(neededValue in hashTable) {
            return [hashTable[neededValue], i];
        } else {
            hashTable[arr[i]] = i;
        }
    }
    return [];
}

let a = [1,2,3,4,5,6];
sumToTarget(a,6); //  [1, 3] i.e, index 1 and 3 will make 6
