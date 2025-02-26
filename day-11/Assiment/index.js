//Problem 1: Create a Student Management System (Using Objects) 

const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
        Math: 80,
        Science: 65,
        English: 50,
        History: 70
    },
    getAverageMarks: function() {
        let total = 0, count = 0;
        for (let subject in this.marks) {
            total += this.marks[subject];
            count++;
        }
        console.log(total / count);
    },
    checkPassOrFail: function() {
        let avr=this.getAverageMarks();
        if (avr>40){
            console.log("PASSED");
        }else{
            console.log("FAILED");
        }
    }
};

console.log(student.getAverageMarks()); 
console.log(student.checkPassOrFail()); 


//Problem 2: Library System (Nested Objects & Methods) 

const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function(bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
        } else {
            console.log("Book not available.");
        }
    },
    returnBook: function(bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies++;
        }
    }
};

library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies);  


//Problem 3: Generate Multiplication Table (For Loop) 

function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

generateTable(5, 10);


//Problem 4: FizzBuzz (If-Else Conditions) 

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i);
        }
    }
}

fizzBuzz(15);


//Problem 5: Reverse a String Without Using .reverse() 

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("JavaScript"));  


//Problem 6: Remove Duplicates from an Array 

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6])); 

//Problem 7: Find the Longest Word in a Sentence 

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("Coding is amazing and challenging")); 


//Problem 8: Custom Array Method (Creating Your Own .map()) 

function myMap(arr, callback) {
    let result = [];
    for (let element of arr) {
        result.push(callback(element));
    }
    return result;
}

function myCallback(x) {
    return x * 2;
}

console.log(myMap([1, 2, 3, 4], myCallback)); 


//Problem 9: Find the First Non-Repeating Character in a String 

function firstUniqueCharacter(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstUniqueCharacter("aabbcddce")); 

//Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target 

function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); 


//Problem 11: Implement a Stack in JavaScript 

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); 
console.log(myStack.peek()); 
console.log(myStack.isEmpty()); 

/*Question: - String Manipulation Challenge 
You are given a string containing alphabets and numbers. Your task is to extract all numbers from the 
string, sum them up, and return the new modified string where all numbers are replaced with their 
sum. 
Example: 
Input: "abc123xyz45pq7" 
Output: "abc175pq"*/

function modifyString(str) {
    let sum = 0;
    let newStr = str.replace(/\d+/g, (num) => {
        sum += parseInt(num);
        return "";
    });
    return newStr + sum;
}

console.log(modifyString("abc123xyz45pq7")); 


/*Question: - Find Most Frequent Element in an Array 
Given an array of numbers, find the element that appears the most times. If multiple elements have 
the same frequency, return any one of them. 
Example: 
Input: [1, 3, 2, 3, 4, 1, 3, 2, 3, 5] 
Output: 3 (since 3 appears the most) */

function mostFrequentElement(arr) {
    let freqMap = {};
    let maxFreq = 0;
    let mostFrequent;

    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mostFrequent = num;
        }
    }
    return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3, 2, 3, 5]));
