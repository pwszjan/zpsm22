const _ = require('lodash');

const avg = arr => {
  return _.mean(arr);
};

console.log(avg([1, 2, 3, 4, 5]));

const maxF = arr => {
  return _.max(arr);
};

const minF = arr => {
  return _.min(arr);
};

console.log(maxF([1, 2, 3, 4, 5]));
console.log(minF([1, 2, 3, 4, 5]));
