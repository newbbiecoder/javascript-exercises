let newObj = [];
const getTheTitles = function(books) {
    books.map((item) => newObj.push(item.title));
    return newObj;
};

// Do not edit below this line
module.exports = getTheTitles;
