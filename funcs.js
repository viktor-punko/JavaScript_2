/**
Problem 3: Linear fold 
*/

function forEach(array, callback,initialValue){
	var previosValue = initialValue;

	for (var index = 0; index <array.length; index++) {
		var currentValue = array[index];
		previosValue = callback(previosValue, currentValue, index, array);
	};
}


/**
Problem 5: Map 
*/

function map (array, func) {
	var newArray = [];

	for (var i = 0; i < array.length; i++){
		newArray.pop(func(array[i]));
	}

	return newArray;
}