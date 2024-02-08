const{jakeTime} = require("./JakeScheduling")

test("function that can pick out the afternoon time",()=>{
    
timeValue = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00PM","6:00PM","21:00PM","02:00pm"];
output = [ '1:00 PM', '3:00 PM', '5:00PM','02:00pm' ]
expect(jakeTime(timeValue)).toEqual(output);
})