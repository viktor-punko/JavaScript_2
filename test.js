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
var numbers = [1,2,3];
manager.linearFold(numbers, function(pr, curV,i, arr){return curV + 23;}, 3);
console.log('3: Linear fold ' + numbers);


//4
var arr = manager.unfold(function(e){
	return ['some herna', false];}, 
	false);
console.log('4: Linear unfold  ' + arr);


//5