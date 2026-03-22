
/**
 * Each string is stored as an array of characters under the hood.
 * Strings are immutable, meaning any operation creates a new string.
 * String indexing is like array indexing.
 */

let str = "hello world";

// Basic properties
str.length         // 11

// Accessing characters
str[0]             // 'h'
str.charAt(1)      // 'e'

// String manipulation
str.toUpperCase()     // "HELLO WORLD"
str.toLowerCase()     // "hello world"
str.trim()            // removes whitespace from both ends
str.slice(0, 5);      // "hello"
str.substring(0, 5);  // "hello"

// Searching
str.indexOf("o");     // 4
str.lastIndexOf("o"); // 7
str.includes("world") // true
str.startsWith("hel") // true
str.endsWith("ld")    // true

// Replace
str.replace("world", "JS");       // "hello JS"
str.replaceAll("l", "X");         // "heXXo worXd"

// Split & Join
str.split(" ");       // ["hello", "world"]
["hello", "JS"].join(" ") // "hello JS"

// Reversal
str.split("").reverse().join(""); // "dlrow olleh"

// sort a string alphabetically
str.split("").sort().join(""); // "dehllloorw"

// Check if string has duplicates
for (let word of arr) {
    let set = new Set(word);

    if (set.size !== word.length) {
        console.log(word, "has duplicates");
    }
}

// Rotate a string
for (let i = 0; i < n; i++) {
    let n = s1.length;
    // generate and check all possible rotations of s1
    for (let i = 0; i < n; i++) {
        // if current rotation is equal to s2 return true
        if (s1 === s2) {
            return true;
        }
        // Right rotate s1
        let last = s1[s1.length - 1];
        s1 = last + s1.slice(0, s1.length - 1);
    }
    return false;
}