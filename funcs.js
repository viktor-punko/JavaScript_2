/**
Problem 3: Linear fold 
*/
function linearFold(array, callback,initialValue){
	var previosValue = initialValue;

	for (var index = 0; index <array.length; index++) {
		var currentValue = array[index];
		previosValue = callback(previosValue, currentValue, index, array);
	};
}


/**
Problem 5: Map 
Test:
	a = [1,2,3];
	map(a, function(e){ e = e + 45; return e;});
*/
function map (array, func) {
	var newArray = [];

	for (var i = 0; i < array.length; i++){
		newArray.push(func(array[i]));
	}

	return newArray;
}

/**
Problem 6: Filter
Test:
	filter(a, function(e){ retrun e > 1;});
*/
function filter(array, filterCallback){
	var newArray = [];

	for (var i = 0; i < array.length; i++){
		if (filterCallback(array[i])){
			newArray.push(array[i]);
		}
	}

	return newArray;
}

/**
Problem 7: Average of even numbers 
*/
function calculateAverage(array){
	var sum = 0;
	linearFold(array, function(previosValue,currentValue,index, array){
		sum += currentValue;
	}, array[0]);
	return sum;
}