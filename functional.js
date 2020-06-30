// Multiplication and sum
 const sum = (accumulator, currentValue) => accumulator + currentValue;
 const mul = (accumulator, currentValue) => accumulator * currentValue;

 //reverse function
 function reverseWord(string){
     return string.split('').reverse().join('');
 }

 // longest word counter
 function longWord(word1,l){
     let word=word1.filter(word1 =>word1.length > l)
 }