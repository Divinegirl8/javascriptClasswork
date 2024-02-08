const {emily} = require("./SarahCollection")

test("array can return object",()=>{
    members = ["Emily","Jack","Sophia","Daniel"];
    books = ["Love Breed","Champion","Lion King","Brave Girl","Powerhorse"];
    expected = {
        Emily: 'Love Breed',
        Jack: 'Champion',
        Sophia: 'Lion King',
        Daniel: 'Brave Girl'
      }

      expect(emily(members,books)).toEqual(expected);
    
})