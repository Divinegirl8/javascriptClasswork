const {combineResults} = require("./PushZero");

test('should move zero to the back', () => {
    let values = [0, 4, 2, 0, 5, 0];
    let output = [4,2,5,0,0, 0];
    expect(combineResults(values)).toEqual(output)
})

test('should move zero to the back2', () => {
    let values = [4,0,0,5,7];
    let output = [4,5,7,0,0];
    expect(combineResults(values)).toEqual(output)
})