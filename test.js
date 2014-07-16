var manager = new FunctionManager();

//1
var f = manager.partialAplication(function(a, b){ 
	return a + b;}
	, 6, 9);
var g = f();
console.log('1: Partial Application ' + g); //15 = 6 + 9


//2
var sum = function(a, b) {
	return a + b;
};

var addToTwo = manager.curry(sum, 2);
console.log( '2: Currying ' + addToTwo(3)); //5


//3
var numbers = [1, 2, 3];
manager.linearFold(numbers, function(pr, curV,i, arr){return curV + 23;}, 3);
console.log('3: Linear fold ' + numbers);


//4
var arr = manager.unfold(function(e){
	return ['some herna', false];}, 
	true);
console.log('4: Linear unfold  ' + arr);


//5
var arr = [1, 2, 3];
var newArray = manager.map(arr, function(e){ 
	e = e + 45; 
	return e;
});
console.log('5: Map  ' + newArray);


//6
var arr = [1, 2, 3];
var newArray = manager.filter(arr, function(e){ 
	return e > 1;
});
console.log('6: Filter  ' + newArray);


//7
var arr = [1, 2, 3];
var newArray = manager.calculateAverage(arr);
console.log('7: Average of even numbers  ' + newArray);


//8
var summa = manager.sumOfRandomNumbers(10);
console.log('8: Sum of random numbers  ' + summa);


//9
var arr = [1, 2, 3];
var newArray = manager.first(arr, function(e){return e >1;});
console.log('9: First ' + newArray);


//10
var lazyCallback = manager.lazyEvaluation(function (a, b) {
	return a + b;
}, 2, 3);
console.log('10: Lazy evaluation ' + lazyCallback());


//11
console.log('11: Memoization ' + manager.memoization(function (a, b) {
	return a - b;
})(2,3));