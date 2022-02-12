// Using a For loop
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Using Array.prototype.find 
function findElement(arr, func) {
  return arr.find(func);
}

// Using Array.prototype.map()
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// Using Recursion 
function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}
