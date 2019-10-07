//Mob coding of Oregon Trail 1 & 2 with Karen Marvel, Sasha Lukas, Chris Wilson, Koren Nyles. Karen Marvel converting to Class syntax on her own.
// Assessment - Oregon Trail 3
// Recall how to create a class object using a constructor function for instance properties 
//and a prototype method for behavior common to all instances of the class. Here's an example:

//     function Dog (name, breed, isGoodBoy) {
//         this.name = name;
//         this.breed = breed;
//         this.isGoodBoy = isGoodBoy;
//     }
//     Dog.prototype = {
//         constructor: Dog,
//         sit: function () {
//             // sitting code here
//         },
//         fetch: function () {
//             // fetching code here
//         }
//     }

// Following this example, create two different types of classes using constructor 
//functions and prototype methods: a Traveler and a Wagon.

// A Traveler has a few properties:

//     a name (string) that must be provided as a parameter to the constructor
//     an amount of food (number) with an initial value of 1
//     an isHealthy (boolean) to indicate whether they are sick, with an initial value of true
// function GuardDog (name, breed, isGoodBoy, attackWord) {
//     Dog.call(this, name, breed, isGoodBoy);
//     this.attackWord = attackWord;
// }
// GuardDog.prototype = Object.create(Dog.prototype);
// GuardDog.prototype.constructor = GuardDog;
// GuardDog.prototype.bark = function () {
//     // barking code here
// }




// A Doctor is a Traveler with one additional method:
// Doctor.prototype.heal(traveler)

// Pass another Traveler as a parameter to the .heal() method, 
//and their isHealthy property is changed to true.

// A Hunter is a Traveler that is better at finding food, 
//but requires more food to eat. They should start out with 
//2 food instead of just 1 like other travelers do. 
//They can also give food to other travelers:
// Hunter.prototype.hunt()

// Increase the hunter's food by 5. (A normal traveler gains 
//only 2.)
// Hunter.prototype.eat()

// Consumes 2 units of the hunter's food. If the hunter doesn't
// have 2 food when they are instructed to eat, they eat as much 
//as they can (0 or 1 unit), but the hunter is no longer healthy. 
//(A normal traveler eats only 1 unit of food.)
// Hunter.prototype.giveFood(traveler, numOfFoodUnits)

// Transfers numOfFoodUnits from the hunter to a different 
//traveler. If the hunter has less food than they are being 
//asked to give, then no food should be transferred.
class Traveler {
    constructor(name)   {
            this.name = name;
            this.foodAmount = 1;
            this.isHealthy = true;
        }

            hunt() {
                this.foodAmount = this.foodAmount + 2;
            }
            eat() {
                if(this.foodAmount > 0){
                  this.foodAmount = this.foodAmount - 1;
            } else { this.isHealthy = false};
        }
    }
// A Wagon has a few properties as well:
class Doctor extends Traveler{
    constructor (name) {
    super(name)
    this.physician = true;
    }
        heal (travelerName) {
        travelerName.isHealthy = true;

}}
class Hunter extends Traveler{
    constructor(name) {
        super(name)
        this.hunter = true;
        this.foodAmount = 2
}
    hunt() {
    this.foodAmount = this.foodAmount + 5;
// Hunter.prototype.hunt()

// Increase the hunter's food by 5. (A normal traveler gains 
//only 2.)
}
    eat()   {
        if(this.foodAmount > 1){
          this.foodAmount = this.foodAmount - 2;
    } else { this.isHealthy = false;
        if(this.foodAmount = 1){
            this.foodAmount = 0
        }};
  // Hunter.prototype.eat()

// Consumes 2 units of the hunter's food. If the hunter doesn't
// have 2 food when they are instructed to eat, they eat as much 
//as they can (0 or 1 unit), but the hunter is no longer healthy. 
//(A normal traveler eats only 1 unit of food.)
}
    giveFood(traveler, numOfFoodUnits) {
    if(this.foodAmount >= numOfFoodUnits)   {
        this.foodAmount = this.foodAmount - numOfFoodUnits;
        traveler.foodAmount = traveler.foodAmount + numOfFoodUnits
    }
    else{return "nope"}
    //hunter give food function code
    // Transfers numOfFoodUnits from the hunter to a different 
//traveler. If the hunter has less food than they are being 
//asked to give, then no food should be transferred.
    }
}
//     a capacity (number) that must be provided as a parameter to the constructor, 
//sets the maximum number of passengers the wagon can hold
//     a passengers list (array) which is initially empty
function Wagon (capacity) {
    this.capacity = capacity;
    this.seatsAvailable = capacity
    this.passengersList = [];
    this.isQuarantine = false; 
    this.travelersTotalFoodAmount = 0; 

}

Wagon.prototype = {
    constructor: Wagon,
    getAvailableSeatCount: function () {
        this.seatsAvailable = this.capacity - this.passengersList.length
            return this.seatsAvailable;        
    },
    join: function (traveler) {
        this.getAvailableSeatCount();
        if (this.seatsAvailable > 0) {
        this.passengersList.push(traveler);
        } else {
            return "there isn't room"; 
        }
    },
    shouldQuarantine: function(isHealthy)    {
        this.isQuarantine = false
        //if someone's not healthy, should return true
        //we start as healthy
        //iterate through the passenger list
        //if all Traveler.isHealthy = true, return isQuarantine false
        //if any traveler.isHealthy = false, return isQuarantine true
        for(i = 0; i < this.passengersList.length; i++)  {
            
            if(this.passengersList[i].isHealthy === false)    {
                this.isQuarantine = true;
            }
        }
            return this.isQuarantine;
        
    },
    totalFood: function()    {
        //add all the traveler's food together.
        this.travelersTotalFoodAmount = 0
        for(i = 0; i < this.passengersList.length; i++)  {
            this.travelersTotalFoodAmount = this.travelersTotalFoodAmount + this.passengersList[i].foodAmount;
   
    }   
    return this.travelersTotalFoodAmount
    }
// Return the total amount of food among all occupants of the wagon.
}

let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');

let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt(); //gets 2 more food
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();//loses 1 food
sarahunter.eat();//loses 2 food
drsmith.eat(); //loses 1 food
juan.eat(); //loses 1
juan.eat(); // loses 1 juan is now hungry (sick) 
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);//juan should have 4
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);