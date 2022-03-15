// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return "${this.strength}";
  }
  receiveDamage(TheDamage) {
    return "${this.health}";
  }
}

// Viking
class Viking {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return "${this.strength}";
  }
  receiveDamage(theDamage) {
    let alive = true;
    if ((alive = true)) {
      return "${this.name} has received DAMAGE points of damage";
    }
  }
}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
