const reverseString = function(text) {
    splitArr = text.split(" ").reverse();
    reversed_text = ""


    for(index in splitArr){
        if(index > 0){
            reversed_text += " ";
        }
        letter_length = splitArr[index].length;
        while(letter_length > 0){
            reversed_text += splitArr[index][letter_length-1];
            letter_length -= 1;
            
        }
    }
    return reversed_text;
};

// Do not edit below this line
module.exports = reverseString;
