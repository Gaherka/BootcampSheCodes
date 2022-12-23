class Animal {
    constructor(name , color) {
      this._name = name;
      this._color=color
    }
    
    getAnimal(){
        return 'el animal es: '+this._name +'\nel color de piel es: '+this._color
    }
    makeSound() {
      console.log('🔉 Default sound!');
    }
  }
  
  class Dog extends Animal {
    constructor(name,color) {
      super(name);
      super(color)
    }
  
    makeSound() {
      console.log('🐶 WoOof!')
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    getNombre(){
        return 'el nombre es: '+this._name
    }

    makeSound() {
      console.log('🐱 MeowW!')
    }
  }
  
  const animal = new Animal('Doggie','white');
  animal.makeSound();
  console.log(animal.getAnimal())


  const michi = new Cat('Loki')
  console.log(michi.getNombre())
  console.log(michi.makeSound())


  