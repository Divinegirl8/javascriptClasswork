let squareArray = function(scores){
    let newArray = [];
    newArray = scores.map((score) => score * score)
    return newArray;
}

module.exports = {squareArray};