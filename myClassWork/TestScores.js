let scores = function(testScores){
let scoresValue = [];
scoresValue = testScores.filter((scores)=>scores >= 70) 
return scoresValue;
}



module.exports = {scores};