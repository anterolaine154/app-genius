// Filename: ProfessionalComplexCode.js

/**
 * This code is an example of a complex and sophisticated JavaScript program.
 * It demonstrates a fictitious e-commerce website with various features.
 */

// Constants
const TAX_RATE = 0.08;
const SHIPPING_COST = 5.99;

// Function to calculate total price
function calculateTotalPrice(items) {
  let subtotal = 0;

  for (let item of items) {
    subtotal += item.price * item.quantity;
  }

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_COST;

  return total;
}

// Function to display welcome message
function displayWelcomeMessage() {
  console.log("Welcome to our online store!");
  console.log("==============================");
  console.log("Browse through our wide range of products and enjoy your shopping experience.");
  console.log("If you have any questions, contact our customer support for assistance.");
  console.log("==============================");
}

// Class representing a Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  displayDetails() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
  }
}

// Function to process user input
function processUserInput() {
  const userInput = prompt("Enter the number of products you want to purchase:");

  if (userInput !== null && userInput.trim() !== "") {
    const numProducts = parseInt(userInput);

    if (!isNaN(numProducts)) {
      const products = [];

      for (let i = 0; i < numProducts; i++) {
        const name = prompt(`Product ${i + 1}: Enter product name:`);
        const price = parseFloat(prompt(`Product ${i + 1}: Enter product price:`));
        const quantity = parseInt(prompt(`Product ${i + 1}: Enter product quantity:`));

        if (!isNaN(price) && !isNaN(quantity)) {
          products.push(new Product(name, price, quantity));
        } else {
          console.log("Invalid input. Skipping product.");
        }
      }

      if (products.length > 0) {
        // Display selected products
        console.log("Selected Products:");
        console.log("==================");

        for (let product of products) {
          product.displayDetails();
          console.log("------------------");
        }

        // Calculate and display total price
        const totalPrice = calculateTotalPrice(products);
        console.log(`Subtotal: $${totalPrice}`);
        console.log(`Tax: $${totalPrice * TAX_RATE}`);
        console.log(`Shipping: $${SHIPPING_COST}`);
        console.log(`Total: $${totalPrice + (totalPrice * TAX_RATE) + SHIPPING_COST}`);
      } else {
        console.log("No valid products selected.");
      }
    } else {
      console.log("Invalid input. Number of products must be a valid number.");
    }
  } else {
    console.log("No input. Exiting.");
  }
}

// Main program execution
displayWelcomeMessage();
processUserInput();