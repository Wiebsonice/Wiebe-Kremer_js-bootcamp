let arrays = [[1, 2, 3], [4, 5], [6]];

let flattening = arrays.reduce((acc, current) => acc.concat(current), [])
console.log(flattening);

// → [1, 2, 3, 4, 5, 6]
