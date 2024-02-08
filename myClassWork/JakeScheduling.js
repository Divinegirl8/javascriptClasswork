let jakeTime = function(schedules){
 let newTime = []
newTime = schedules.filter((schedule) => !schedule.endsWith("AM") && parseInt(schedule[0]) <= 5 && schedule[1] === ":" || schedule.startsWith("0") && schedule[2] === ":" )
return newTime;
}

timeValue = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM","20:00PM"]
console.log(jakeTime(timeValue))

module.exports = {jakeTime};