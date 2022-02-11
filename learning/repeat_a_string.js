// Repeat a String with a While Loop

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);

// Repeat a String using a Conditional and Recursion

function repeatStringNumTimes(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumTimes("abc", 3);

// Repeat a String using ES6 repeat() method

function repeatStringNumTimes(string, times) {
   return times > 0 ? string.repeat(times) : "";
}
repeatStringNumTimes("abc ", 3);
