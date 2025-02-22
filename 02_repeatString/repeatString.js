const repeatString = function(text,number){
    let same_text = text;

    if(text == "" || number == 0){
        return "";
    }
    else if(number < 0){
        return "ERROR";
    }
    for(let num = 1;num < number;num++){         
            text += same_text;   
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
