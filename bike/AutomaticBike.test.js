const {AutomaticBike} = require("./AutomaticBike")

test('should checkToggle', () => {
  let automaticBike = new AutomaticBike("Yamaha") 
  expect(automaticBike.checkToggle()).toBe(false);
})

test('should get default gear', () => {
  let automaticBike = new AutomaticBike("Yamaha") 
  expect(automaticBike.getGear()).toBe(0);
})

test('should get speed', () => {
  let automaticBike = new AutomaticBike("Yamaha") 
  expect(automaticBike.getSpeed()).toBe(0);
})

test('should turn bike on', () => {
  let automaticBike = new AutomaticBike("Yamaha") 
  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})

test('should turn bike on and accelerate once ', () => {
  let automaticBike = new AutomaticBike("Yamaha") 

  expect(automaticBike.checkToggle()).toBe(false);

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
   
   automaticBike.accelerate();
   expect(automaticBike.getSpeed()).toBe(1);
   expect(automaticBike.getGear()).toBe(1);


  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})

test('should turn bike on and accelerate twice ', () => {
  let automaticBike = new AutomaticBike("Yamaha") 

  expect(automaticBike.checkToggle()).toBe(false);

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
   
   automaticBike.accelerate();
   automaticBike.accelerate();
   expect(automaticBike.getSpeed()).toBe(2);
   expect(automaticBike.getGear()).toBe(1);


  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})

test('should turn bike on and accelerate twenty two times ', () => {
  let automaticBike = new AutomaticBike("Yamaha") 

  expect(automaticBike.checkToggle()).toBe(false);

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
   
  for(let count=1; count <= 22; count++){
   automaticBike.accelerate();
  }
   expect(automaticBike.getSpeed()).toBe(24);
   expect(automaticBike.getGear()).toBe(2);


  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})

test('should turn bike on and accelerate twenty eight times ', () => {
  let automaticBike = new AutomaticBike("Yamaha") 

  expect(automaticBike.checkToggle()).toBe(false);

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
   
  for(let count=1; count <= 28; count++){
   automaticBike.accelerate();
  }
   expect(automaticBike.getSpeed()).toBe(39);
   expect(automaticBike.getGear()).toBe(3);


  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})


test('should turn bike on and accelerate and decelerate ', () => {
  let automaticBike = new AutomaticBike("Yamaha") 

  expect(automaticBike.checkToggle()).toBe(false);

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(true);
   
  for(let count=1; count <= 20; count++){
   automaticBike.accelerate();
  }

  for(let count=21; count <= 25; count++){
    automaticBike.accelerate();
   }



  automaticBike.decelerate();

  expect(automaticBike.getSpeed()).toBe(28);
  expect(automaticBike.getGear()).toBe(2);

  

  automaticBike.keyHole();
  expect(automaticBike.checkToggle()).toBe(false);
})



