// With if statement
function booWho(bool) {
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}

booWho(null);

// With typeof
function booWho(bool) {
  return typeof(bool) === "boolean"
}

booWho(null);
