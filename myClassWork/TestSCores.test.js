const {scores} = require("./TestScores");

test("my array can pick scores greater than and equals to 70",()=>{
    input = [24,25,70,90];
    output = [70,90];
    expect(scores(input)).toEqual(output);
})