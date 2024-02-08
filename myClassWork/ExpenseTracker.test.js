const {expenseTrack} = require("./ExpenseTracker")

test("my function can calculate expenses",()=>{
    categories = {
        "groceries" : 150,
        "dining out" : 100,
        "transportation" : 50,
        "entertainment" : 80
    }
    expect(expenseTrack(categories)).toBe(380);
})