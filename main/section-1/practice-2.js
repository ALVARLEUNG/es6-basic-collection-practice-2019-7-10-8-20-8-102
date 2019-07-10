'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(item => {
    if (collectionB[0].includes(item)) {
      result.push(item)
    }
  });
  return result;
}
