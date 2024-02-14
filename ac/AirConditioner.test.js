const {AirConditioner} = require("./AirConditioner")

test('should turn ac on', () => {
  let ac = new AirConditioner("Haeir");
  expect(ac.checkIsOn()).toBe(false);
  ac.toggle();
  expect(ac.checkIsOn()).toBe(true);
})

test('should turn ac on, increase temperature', () => {
    let ac = new AirConditioner("Haeir");
    expect(ac.checkIsOn()).toBe(false);
    ac.toggle();
    expect(ac.checkIsOn()).toBe(true);

    ac.increaseTemperature();
    expect(ac.checkTemperature()).toBe(17);
  })

  test('should turn ac on, increase temperature2', () => {
    let ac = new AirConditioner("Haeir");
    expect(ac.checkIsOn()).toBe(false);
    ac.toggle();
    expect(ac.checkIsOn()).toBe(true);

    for(let index =0; index < 10; index++){
    ac.increaseTemperature();}
    expect(ac.checkTemperature()).toBe(26);
  })

  test('should turn ac on, increase temperature and decrease temperature', () => {
    let ac = new AirConditioner("Haeir");
    expect(ac.checkIsOn()).toBe(false);
    ac.toggle();
    expect(ac.checkIsOn()).toBe(true);
    for(let index =0; index < 8; index++){
        ac.increaseTemperature();}
    expect(ac.checkTemperature()).toBe(24);

    for(let index =0; index < 4; index++){
        ac.decreaseTemperature();}
        expect(ac.checkTemperature()).toBe(20);
  })

  test('should turn ac on, increase temperature beyond 30', () => {
    let ac = new AirConditioner("Haeir");
    expect(ac.checkIsOn()).toBe(false);
    ac.toggle();
    expect(ac.checkIsOn()).toBe(true);
    for(let index =0; index < 30; index++){
        ac.increaseTemperature();}
    expect(ac.checkTemperature()).toBe(30);

       
  })

  test('should turn ac on, decrease temperature beyond 16', () => {
    let ac = new AirConditioner("Haeir");
    expect(ac.checkIsOn()).toBe(false);
    ac.toggle();
    expect(ac.checkIsOn()).toBe(true);
    for(let index =0; index < 30; index++){
        ac.increaseTemperature();}

        for(let index =0; index < 17; index++){
            ac.decreaseTemperature();}
    expect(ac.checkTemperature()).toBe(16);

       
  })
