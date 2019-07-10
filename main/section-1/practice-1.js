'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.collectElement(collectionB);
}

Array.prototype.collectElement = function (collectionB) {
  let result = [];
  this.forEach(item => {
    if (collectionB.includes(item)) {
      result.push(item)
    }
  });
  return result;
}
