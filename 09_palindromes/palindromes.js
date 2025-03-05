// split str into array 
// filter punctuations like comma, dot, !, etc
// add that into new array
// reverse the new array
// check if both equal

const palindromes = function (str) {
    normal_array = str.split('');

    let new_array = normal_array.filter((item) => {
        if(item == ' '){
            return false;
        }
        else if(item == '.'){
            return false;
        }
        else if(item == ','){
            return false;
        }
        else if(item == '!'){
            return false;
        }
        else{
            return true;
        }
    });

    let reversed_array = new_array.slice();

    reversed_array.reverse();

    let new_array_join = new_array.join('').toLowerCase();
    let reversed_array_join = reversed_array.join('').toLowerCase();

    if(new_array_join == reversed_array_join){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
