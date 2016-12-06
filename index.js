'use strict';

const comparator = (a, b) => (a instanceof RegExp) ? a.test(b) : a === b;

const equalish = (a, b, compare = comparator) => {
  const length = (compare === comparator) ? Object.keys(a).length === Object.keys(b).length : true;
  return length && Object.keys(a).every(key => compare(a[key], b[key]));
};

module.exports = equalish;
