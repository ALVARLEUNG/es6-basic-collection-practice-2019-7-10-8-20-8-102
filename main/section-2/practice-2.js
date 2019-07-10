'use strict';

module.exports = function countSameElements(collection) {
		let result = [];
	for (let i = 0; i<collection.length;) {
		let count = 0;
		collection.forEach(item => {
			if(collection[i] === item) {
					count++;
			}
		})
		if (collection[i].indexOf('-')!=-1) {
			result.push({key:collection[i].split('-')[0], count: parseInt(collection[i].split('-')[1])});
		}else {
			result.push({key:collection[i], count: count});
		}
		i +=count;
	}
	return result;
}
