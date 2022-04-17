// Soldier
class Soldier {
  //define the new parameters that need to pe passed when creating a new element of the class
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  // method to return the strenght attribute
  attack() {
    return this.strength;
  }

  //method to reduce the damage passed as an argument to current health

  receiveDamage(damage) {
    this.health =- damage;
  }
}

// Viking. Comes from parent class soldier. Will inherit attributes and methods from soldier

class Viking extends Soldier {
  constructor(name, health, strength) {
    //constructor with the same parameter of soldier + a new name
    super (health, strength);// will pass the values health and strength as parameter to the parent class
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;// smae function as the one where soldier receives damage

    // condition to check if the Viking is still alive (this.health > 0)
    if (this.health > 0) {
      return '${this.name} has received ${damage} points of damage';

    } else { 
      return "${this.name} has died in act of combat";

    }
    
   }

   // simple method
  
    battleCry() {
      return "Odins Owns you all";
    }
}

// Saxon comes from parent class soldier will inherit attributes and methods from soldier
class Saxon extends Soldier {
  // below constructror is optional since Saxon will have the same arguments as soldier
  constructor(health,strength) {
    //constructor with the same parameters as soldier will pass both values through the super
    super(health, strength)
  }
  //same as Viking method
receiveDamage(damage) {
  this.health -= damage;
  if (this.health > O) {
    return "A Saxon has received ${damage} points of damages";
  } else {
    return 'A Saxon has died in combat'; 
    }
  }
}
 


// War

class War {
  constructor () {
    this.vikingArmy =[]; // Armies will start as empty array. These are attributes of the war class
    this.saxonArmy = [];
  }

  // to add a viking simply push the viking being passed as an argument to the vikingArmy attribute
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  //same as previous method
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // method for a random viking to attack a random saxon
  vikingAttack() {
    //following 3 lines are to determine a random viking within the viking Army array
    const randomVikingNumber = Math.random() * this.vikingArmy.length; // this will give a random number between 0 and the length of the army
    const randomVikingIndex = Math.floor(randomVikingNumber); // this will floor the number. We are trying to obtain the index and index are integers
    const randomViking = this.vikingArmy[randomVikingIndex]; // using the index, we can target a random viking from the array and save it inside a variable
    
    // same as above but for a random saxon from the saxonArmy array
    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = Math.floor(randomSaxonNumber);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    // below we want to call the receiveDamage method of the saxon with the strenght of the viking
    //receiveDamage() will receive the health of saxon whatever number is passed as parameter
    //attack(): will hold the strength value of the viking
    // Important : we save the result inside a variable because we want to return at the end of the function, but we also want to run it before we check for dead saxons
    const result = randomSaxon.receiveDamage(randomViking.attack());

    // now we want to check if the saxon died and if he did, remove it from the array

    // one way, iterate over the whole array to check if any saxon died
    // this.saxonArmy.forEach((saxon, i) =>{
      //if (saxon.health <=0){this.saxonArmy.splice(i, 1);}});

      // Better approach, target the saxon that receive damage. check if died.
      // randomSaxon is the saxon that receive damage. randomSaxonIndex is its index.
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }

      return result;

  }

  saxonAttack() {
    // exact same approach as above
    const randomVikingNumber = Math.random() * this.vikingArmy.length;
    const randomVikingIndex = parseInt(Math.floor(randomVikingNumber));
    const randomViking = this.vikingArmy[randomVikingIndex];

    const randomSaxonNumber = Math.random() * this.saxonArmy.length;
    const randomSaxonIndex = parseInt(Math.floor(randomSaxonNumber));
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const result = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
    this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  // returning a string depending on if any array is empty or not

  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day ..."
    } else if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century";
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
