const{frequencyCount} = require("./frequency")

test("function can count characters",()=>{
    input = 'semicolon.africa';
    output =  {'s': 1, 'e': 1, 'm': 1, 'i': 2, 'c': 2, 'o': 2, 'l': 1, 'n': 1, '.': 1, 'a': 2, 'f': 1, 'r': 1}
    expect(frequencyCount(input)).toEqual(output)
})

