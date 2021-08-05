function loop(start, test, update, body) {
    // Code goes here...
    
}

const test = function(n) {
    return n > 0;
}

const update = function(n) {
    return n - 1;
}

loop(3, test, update, console.log);
  // 3
  // 2
  // 1
