'use strict';

const comparator = (a, b) => (a instanceof RegExp) ? a.test(b) : a === b;

const equalish = (a, b, compare = comparator) => {
  const length = Object.keys(a).length === Object.keys(b).length;
  return length && Object.keys(a).every(key => compare(a[key], b[key]));
};

module.exports = equalish;
