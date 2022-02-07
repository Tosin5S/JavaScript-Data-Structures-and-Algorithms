// Find the Longest Word With a FOR Loop

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Find the Longest Word With the sort() Method

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Find the Longest Word With the reduce() Method

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
