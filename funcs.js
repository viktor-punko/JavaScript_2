function FunctionManager (argument) {
		
	'use strict';


	var self = this;
	/**
	Problem 1: Partial Application
	Test:
		var f = partialAplication(function(a, b){ return a + b;}, 6, 9);
		var g = f();
		g(); //15 = 6 + 9
	*/
	this.partialAplication = function (func) {
	    var args = Array.prototype.slice.call(arguments, 1);

	    return function() {
	        var allArgs = args.concat(Array.prototype.slice.call(arguments));
	        return func.apply(this, allArgs);
	    };
	};


	/**
	Problem 2: Currying
	Test:
		var sum = function(a, b) {return a + b;};
		var addToTwo = curry(sum, 2);
		addToTwo(3); //5
	*/
	this.curry = function (func) {

		var args = arguments, curryArgs = [];
 
		if (typeof func !== 'function') {
			throw new Error('The first arguments must be function!');
		}

	 	curryArgs = Array.prototype.slice.call(arguments, 1);
 
	 	return function () {
	 		var argsArr = Array.prototype.slice.call(arguments, 0);    
	 
	 		curryArgs = curryArgs.concat(argsArr);
	 		return func.apply(this, curryArgs);
	 	}
 	};


	/**
	Problem 3: Linear fold 
	Test:
		var numbers = [1,2,3];
		linearFold(numbers, function(pr, curV,i, arr){return curV + 23;}, 3);
	*/
	this.linearFold = function (array, callback, initialValue){
		var previosValue = initialValue;

		for (var index = 0; index <array.length; index++) {
			var currentValue = array[index];
			previosValue = callback(previosValue, currentValue, index, array);
		};
	};


	/**
	Problem 4: Linear unfold 
	Test:
		var arr = unfold(function(e){return ['some herna', false];}, false);
	*/
	this.unfold = function (callback, initialValue) {
	    var results = [];
	    var returnedArr = [];

	    while(initialValue) {
	        returnedArr = callback(initialValue);
	        results = returnedArr[0];
	        initialValue = returnedArr[1];
	    }

	    return results;
	};


	/**
	Problem 5: Map 
	Test:
		var a = [1,2,3];
		map(a, function(e){ e = e + 45; return e;});
	*/
	this.map = function (array, func) {
		var newArray = [];

		for (var i = 0; i < array.length; i++){
			newArray.push(func(array[i]));
		}

		return newArray;
	};


	/**
	Problem 6: Filter
	Test:
		filter(a, function(e){ retrun e > 1;});
	*/
	this.filter = function (array, filterCallback){
		var newArray = [];

		for (var i = 0; i < array.length; i++){
			if (filterCallback(array[i])){
				newArray.push(array[i]);
			}
		}

		return newArray;
	};


	/**
	Services sum function
	*/
	this.sumArray = function (array){
		var sum = 0;
		this.linearFold(array, function(previosValue,currentValue,index, array){
			sum += currentValue;
		}, array[0]);

		return sum;
	};


	/**
	Problem 7: Average of even numbers
	*/
	this.calculateAverage = function (array){
		return this.sumArray(array)/array.length;
	};


	/**
	Problem 8: Sum of random numbers 
	*/
	this.sumOfRandomNumbers = function (count){
		
		// http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}

		if (count < 0 && isNumber(count)){
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

		var randomArr = generateRandomArray(count);
		return this.sumArray(randomArr);
	};


	/**
	Problem 9: First 
	Test:
		[1, 2, 3];
		first(a, function(e){return e >1;});
	*/
	this.first = function (array, conditionCallback) {
		var filetedArray = this.filter(array, conditionCallback);
		return (filetedArray.reverse()).slice(filetedArray.length - 1);
	};


	/**
	Problem 10: Lazy evaluation 
	*/
	this.lazyEvaluation = function (lazyCallback){
	    var args = Array.prototype.slice.call(arguments, 1);
	    return function() {
	        return lazyCallback.apply(this, args);
	    };
	};


	/**
	Problem 11: Memoization 
	*/
	this.memoization = function (callback) {
	    var cache = {};

	    return function (argument) {
	        if (!argument) {
	            return;
	        }
	        
            var args = Array.prototype.slice.call(arguments);
            var result;

            var searchArgumentInCacheResult = self.first(cache, function(element){
            	return element === argument;
            });

            if (searchArgumentInCacheResult.length > 0) {
            	result = cache[argument];
            }
            else
            {
            	cache[argument] = callback.apply(this, args);
            	result = cache[argument];
            }
            return result;
	    };
	};

}