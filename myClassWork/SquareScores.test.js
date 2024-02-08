const {squareArray} = require("./SquareScores")

test("my array can square scores", () =>{
    input = [2,4,6,8,10];
    output = [4,16,36,64,100]
    expect(squareArray(input)).toEqual(output);

})