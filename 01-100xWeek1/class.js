// legCount, speak, name
class Animal {
    constructor(name, legCount, speaks) {
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
    }
    
    static myType() {
      console.log("Animal");
    }
    
    speak() {
      console.log("hi there " + this.speaks);
    }
  }
  
  console.log(Animal.myType());
  let dog = new Animal("dog", 4, "bhow bhow"); // create object
  let cat = new Animal("cat", 4, "meow");
  dog.speak(); // call function on object