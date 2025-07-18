// Использование Array.flat()
const nested = [1, [2, [3]]];
const flat = nested.flat(2);
console.log(flat); // [1, 2, 3]