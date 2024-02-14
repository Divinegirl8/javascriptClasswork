class AirConditioner{

constructor(name){
    this.name = name;
    this.socket = false;
    this.temperature = 16;

    this.increaseTemperature = function(){
        if(this.temperature < 30){
            this.temperature += 1;
        }
        else{
            this.temperature = this.temperature;
        }
    }

    this.decreaseTemperature = function(){
        if(this.temperature > 16){
            this.temperature -= 1
        }
        else{
            this.temperature = this.temperature;
        }
    }

    this.toggle = function(){
        if(!this.socket){
          this.socket = true;
        }else{
            this.socket = false;
        }
    }

    this.checkIsOn = function(){
        return this.socket;
    }

    this.checkTemperature = function(){
        return this.temperature;
    }
}

}

module.exports = {AirConditioner}