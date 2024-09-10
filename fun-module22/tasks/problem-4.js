// ### =========================================================================== Task-4:
// Write a function to find the longest word in a given string.

// sample-input:
// I am learning Programming to become a programmer

// sample-output: Programming

const string = "I am learning Programming to become a programmer";
function fndLongestWord(str) {
  const words = str.split(" ");
  let longestWord = '';
  for(const item of words)
    if(item.length > longestWord.length){
        longestWord = item;
    }
    return longestWord
}
const output = fndLongestWord(string);
console.log(output);