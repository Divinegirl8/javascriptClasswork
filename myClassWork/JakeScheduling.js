let jakeTime = function(schedules){
 let newTime = []
newTime = schedules.filter((schedule) => !schedule.endsWith("AM") && parseInt(schedule[0]) <= 5 && schedule[1] === ":" || schedule.startsWith("0") && schedule[2] === ":" )
return newTime;
}



module.exports = {jakeTime};