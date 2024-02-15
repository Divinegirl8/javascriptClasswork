const{transformToZero} = require("./ZeroTransformation");

test("can fill zero",()=>{
    let value = [[2,3],[1,0],[5,3]];
    let result = [ [ 2, 3 ], [ 0, 0 ], [ 5, 3 ] ];
    expect(transformToZero(value)).toEqual(result)

})

test("can fill zero2",()=>{
    let value = [[0,5],[2,3]];
    let result = [ [ 0, 0 ], [ 2, 3 ] ];
    expect(transformToZero(value)).toEqual(result)

})