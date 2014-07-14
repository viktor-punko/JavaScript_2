/**
Problem 3: Linear fold 
*/

function ForEach(array, callback,initialValue){
	var previosValue = initialValue;

	for (var index = 0; index <array.length; index++) {
		var currentValue = array[index];
		previosValue = callback(previosValue, currentValue, index, array);
	};
}