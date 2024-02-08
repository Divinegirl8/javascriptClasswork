let newScores = function(scores){
    let newArray = [];
    newArray = scores.map((score) => score + 5);
    return newArray;
}

module.exports = {newScores};