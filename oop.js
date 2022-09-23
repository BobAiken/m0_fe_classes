// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor (name) {
    this.name = name;
    this.color = "silver";
    this.speak = "silence"
  }
say(speech){
  this.speak = `*~* ${speech} *~*`
  }

}

var unicorn1 = new Unicorn ("Judy")
console.log(unicorn1)
unicorn1.say("Sparkle sparkle")
console.log(unicorn1)

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor (name, pet = "bat"){
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }
  drink(){
    this.thirsty = false
  }

}

var vlad = new Vampire ("John")
console.log(vlad)
vlad.drink()
//to show the properties changed
console.log(vlad)

var vampire2 = new Vampire ("Derek", "Dog")
console.log(vampire2)

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
var count = 0

class Dragon {
  constructor (name, rider, color){
    this.name = name
    this.rider = rider
    this.color = color
    this.isHungry = true
  }
  eat(){
    count++
    if (count > 3){
      this.isHungry = false
    }
  }
}

var dragon1 = new Dragon ("Blibo","John","purple")
console.log(dragon1)

dragon1.eat()
dragon1.eat()
dragon1.eat()
dragon1.eat()
console.log(dragon1)

var dragon2 = new Dragon ("Beevus","Bill","Green")
console.log(dragon2)

dragon2.eat()
dragon2.eat()
dragon2.eat()
dragon2.eat()
console.log(dragon2)

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor(name, disposition, age = 0){
    this.name = name
    this.disposition = disposition
    this.age = age
    if (this.age > 32){
      this.isAdult = true
    } else {
      this.isAdult = false
    }
    if (this.age > 100){
      this.isOld = true
    } else {
      this.isOld = false
    }
    if (this.name === "Frodo"){
      this.hasRing = true
    } else {
      this.hasRing = false
    }
  }
  celebrateBirthday(){
    this.age++
    if(this.age >= 101){
      this.isOld = true
      this.isAdult = true
    } else if (this.age>=33){
      this.isAdult = true
    }
  }
}


var hobbit1 = new Hobbit("Frodo","cool",32)
console.log(hobbit1)
hobbit1.celebrateBirthday()
console.log(hobbit1)

var hobbit2 = new Hobbit("Scrimbo","shy",100)
console.log(hobbit2)
hobbit2.celebrateBirthday()
console.log(hobbit2)
