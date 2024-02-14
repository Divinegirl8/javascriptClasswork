class AutomaticBike{
    constructor(name){
        this.name = name;
        this.speed = 0;
        this.gear = 0; 
        this.engineKey = false;
    

    this.getSpeed = function(){
        return this.speed;
    }

    this.getGear = function(){
        return this.gear;
    }

    this.checkToggle = function(){
        return this.engineKey;
    }

    this.keyHole = function(){
        if(!this.engineKey){
            this.engineKey = true;
        }else{
            this.engineKey = false;
        }
    }

    this.accelerate = function(){
        if(this.speed >= 0 && this.speed <= 19){
        
            this.speed += 1;
            this.gear = 1;
        }

        else if(this.speed >= 20 && this.speed <= 29){
            this.speed += 2;
            this.gear = 2;
        }

        else if (this.speed >= 30 && this.speed <= 39){
            this.speed += 3;
            this.gear = 3
        }
        else{
            this.speed += 4;
            this.gear = 4;
        }
    }

    this.decelerate = function(){
        if(this.speed >= 0 && this.speed <= 19){
            this.speed -= 1;
            this.gear = 1;
        }

        else if (this.speed >= 20 && this.speed <= 30){
            this.speed -= 2;
            this.gear = 2;
        }

        else if (this.speed >= 31 && this.speed <= 43){
            this.speed -= 3;
            this.gear = 3;
        }
        else{
            this.speed -= 4;
            this.gear = 4;
        }

    }



}}
module.exports = {AutomaticBike}