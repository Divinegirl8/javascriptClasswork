let expenseTrack = function(categories){
let total = 0;

for (value in categories){
    total += categories[value];
   }
   return total;

}

module.exports = {expenseTrack}






