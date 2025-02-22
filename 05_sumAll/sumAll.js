const sumAll = function(num1, num2) {
    sum = 0;

    if(num1 < 0 || num2 < 0 || Number.isInteger(num1) == false || Number.isInteger(num2) == false){
        return "ERROR";
    }

    else if(num2 > num1){

        while(num1 <= num2){
            sum += num1;
            num1++;
        }
        return sum;
    }

    else{

        while(num1 >= num2){
            sum += num2
            num2++
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
