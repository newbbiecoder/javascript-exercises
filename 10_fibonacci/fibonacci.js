// num = 5, num1 = 1, num2 = 2, next_number = 3, count = 2
// count = 3, num1 = 2, num2 = 3, next_number = 5


// 1 1 2 3 5 8


const fibonacci = function(num) {
    parseInt(num);
    let arr = [1,1];
    let num1 = 1;
    let num2 = 1;
    let count = 2;
    let next_number = 2;

    if(num == 0){
        return 0;
    }
    else if(num < 0){
        return "OOPS";
    }

    else{
        while(count < num){
            arr.push(next_number);
            num1 = num2;
            num2 = next_number;
            next_number = num1 + num2
            count++;
        }
        return arr[arr.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
