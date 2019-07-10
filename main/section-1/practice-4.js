'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.map(item =>{return item.key}).forEach(item => {
    if (objectB.value.includes(item)) {
      result.push(item)
    }
  });
  return result;
}
