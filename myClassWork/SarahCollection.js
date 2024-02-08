const emily = function(members,books){
let bookAssignment = {}

for (let index = 0; index < members.length; index++) {
    bookAssignment[members[index]] = books[index];
    
}

return bookAssignment;
}


module.exports = {emily};