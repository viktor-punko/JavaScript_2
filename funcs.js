'use strict';

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
Services sum function
*/
function sum(array){
	var sum = 0;
	linearFold(array, function(previosValue,currentValue,index, array){
		sum += currentValue;
	}, array[0]);
	return sum;
};

/**
Problem 7: Average of even numbers
*/
function calculateAverage(array){
	return sum(array)/array.length;
}

/**
Problem 8: Sum of random numbers 
*/
function sumOfRandomNumbers(count){
	
	// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	if (count < 0 && isNumber(count))
	{
		return;
	}
	// copy paste from here: http://javascript.ru/Math.random
	var generateRandomNumber = function (min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var generateRandomArray = function (size) {
		var MAX_RANDOM_NUMBER = 1000000000;
		var MIN_RANDOM_NUMBER = 1;

		var randomArray = [];

		for (var i = 0; i < size; i++){
			randomArray.push(generateRandomNumber(MIN_RANDOM_NUMBER,
				MAX_RANDOM_NUMBER));
		}

		return randomArray;
	};

	return sum(generateRandomArray(count));
}

/**
Problem 9: First 
Test:
	[1, 2, 3];
	first(a, function(e){return e >1;});
*/
function first (array, conditionCallback) {
	var filetedArray = filter(array, conditionCallback);
	return (filetedArray.reverse()).slice(filetedArray.length - 1);
}