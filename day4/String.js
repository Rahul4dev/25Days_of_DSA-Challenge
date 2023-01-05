// Strings are linked immutable array, mainly consists of alphabets but can be anything defined under quotes.

// Complexity Analysis: 
// Read character at given index     T,S = O(1)
// Traverse  T(n)  S(1)
// Copy T,S = O(n)
// Append  T = O(n)
// Concatenate T,S = O(n+m)

// Strings are Immutable in JS, So any modification will create a modified string/array which will be subset of original array.

// Basic Eg.,
// Object Count of the string
const countString = function (str) {
    let obj = {};
    for(i=0; i<str.length;i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char]  || 1 
        };
    }
    return obj;    
}

let s = "mississippi";
countString(s);  // {m: 1, i: 4, s: 4, p: 2}
// OR

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if(!(code >47 && code < 58) &&  // numeric (0-9)
     !(code >64 && code < 91) &&   // uppercase Alphabets (A-Z)
     !(code >96 && code < 123)) {
    return false;
  }
  return true;
}

function countChar(str) {
  let charCount = {};
  for (let char of str) {    
    if(isAlphaNumeric(char)) {
       char = char.toLowerCase();
       charCount[char] = ++charCount[char]  || 1 ;
    }
  }
  return charCount;
}
let s = "mississippi";
isAlphaNumeric(s);  // {m: 1, i: 4, s: 4, p: 2}


// Function to return index of first non-repeating character of a string

function nonRepeating(s) {
    if(s.length === 0) return null;
    let bag = {};
    let count = 0;
    s = s.toLowerCase();  // if a and A are not different
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++){
            if(s[i] === s[j] && i !== j) {
                if(!bag[s[i]]) bag[s[i]] = 1;
                else bag[s[i]] += bag[s[i]] ;
            }            
        }
    }    
    for(let j = 0; j < s.length; j++) {
        if(s[j] in bag);
        else return j;       
    }
    return null;
}

let s = 'abaRb150';
nonRepeating(s);
// O(N**2)T  and O(1)S  
// Space complexity is constant because maximum possible unique characters which we may traverse or create can be 26(lowercase letters) + 26(uppercase letters) + 10(numbers) = 62 which is a constant.
// Or

function nonRepeating(s) {
    let repeat ;
    // s = s.toLowerCase();  // if a and A are diff then this line should be ommited.
    for(let i = 0 ; i < s.length ; i++) {
        repeat = false;
        for(let j = 0 ; j < s.length ; j++) {
            if( s[i] === s[j] && i !== j ) {
                repeat = true;
            }
        }
        if(repeat === false) {
            return i;
        }
    }
    return null;
}

let s = 'daabbccddD';
nonRepeating(s);
// O(N**2)T  and O(1)s

// If we use hash table, to store the char of the strings, and increment it if repeated and then traverse it in order to check which key have only 1 value. Code:

function nonRepeatingHT(s) {
    let ht = {};
    for(let i = 0 ; i < s.length; i++) {
        if(ht[s[i]]) {
            ht[s[i]] += ht[s[i]];
        } else {
            ht[s[i]] = 1;
        }
    }
    for(let j = 0 ; j < s.length; j++) {
        if(ht[s[j]] < 2) return j;
    }
    return null;
    
}

let s = 'abaRb150';
nonRepeatingHT(s);
//  O(N)T  and O(1)s  
//  Space complexity is constant because maximum possible unique characters which we may traverse or create in hash table can be 26(lowercase letters) + 26(uppercase letters) + 10(numbers) = 62 which is a constant.
