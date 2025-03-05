const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, initial_num) => sum + initial_num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, initial_num) => total * initial_num, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let factorial = 1
	if(num == 0){
    return 1;
  }
  else{
    for(let i = 1; i <= num; i++){
      factorial *= i;
    }
    return factorial;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
