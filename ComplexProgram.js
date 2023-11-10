// Filename: ComplexProgram.js
// Content: Sophisticated and Complex Program

/**
 * This program simulates a virtual pet management system.
 * It allows users to create, interact with, and manage virtual pets.
 * The system handles various tasks such as feeding, playing, and monitoring the pet's health.
 * This code utilizes object-oriented principles and advanced data structures.
 */

class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 0;
    this.happiness = 100;
    this.health = 100;
  }

  feed() {
    this.hunger -= 20;
    this.happiness += 10;
    this.health += 5;
  }

  play() {
    this.hunger += 10;
    this.happiness += 20;
    this.health -= 10;
  }

  sleep() {
    this.hunger += 5;
    this.happiness -= 5;
    this.health += 10;
  }

  getStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`Species: ${this.species}`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Happiness: ${this.happiness}`);
    console.log(`Health: ${this.health}`);
  }
}

class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  removePet(petName) {
    this.pets = this.pets.filter(pet => pet.name !== petName);
  }

  getPet(petName) {
    return this.pets.find(pet => pet.name === petName);
  }

  feedAllPets() {
    this.pets.forEach(pet => pet.feed());
  }

  playWithPet(petName) {
    const pet = this.getPet(petName);
    if (pet) pet.play();
  }

  displayAllStatus() {
    console.log("Pet Status:");
    this.pets.forEach(pet => {
      pet.getStatus();
      console.log("------------");
    });
  }
}

// Usage Example

const petManager = new PetManager();

const pet1 = new VirtualPet("Fluffy", "Cat");
const pet2 = new VirtualPet("Buddy", "Dog");

petManager.addPet(pet1);
petManager.addPet(pet2);

petManager.feedAllPets();
petManager.playWithPet("Buddy");

petManager.displayAllStatus();
