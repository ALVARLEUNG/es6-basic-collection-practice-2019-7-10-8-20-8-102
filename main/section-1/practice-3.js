'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(item => {
    if (objectB.value.includes(item)) {
      result.push(item)
    }
  });
  return result;
}
