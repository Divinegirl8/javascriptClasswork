const {newScores} = require("./IncreaseScores");

test("my array can increase scores",() => {
    input = [85,92,78,88,95];
    output = [90,97,83,93,100];
    expect(newScores(input)).toEqual(output);
})