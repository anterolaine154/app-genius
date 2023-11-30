/*
Filename: ComplexCodeExample.js
Description: This code demonstrates a complex and sophisticated algorithm
that generates a random sequence of characters and counts the occurrences
of each character in the sequence.
*/

function generateRandomSequence(length) {
  let sequence = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sequence += characters.charAt(randomIndex);
  }

  return sequence;
}

function countCharacterOccurrences(sequence) {
  const characterCount = {};

  for (let i = 0; i < sequence.length; i++) {
    const character = sequence.charAt(i);

    if (characterCount[character]) {
      characterCount[character]++;
    } else {
      characterCount[character] = 1;
    }
  }

  return characterCount;
}

function displayCharacterOccurrences(characterCount) {
  console.log('Character Occurrences:');
  for (let character in characterCount) {
    console.log(`- ${character}: ${characterCount[character]}`);
  }
}

function runComplexAlgorithm() {
  const sequenceLength = 1000;
  const randomSequence = generateRandomSequence(sequenceLength);
  const characterOccurrences = countCharacterOccurrences(randomSequence);
  displayCharacterOccurrences(characterOccurrences);
}

runComplexAlgorithm();
// The above code will generate a random sequence of characters, count the occurrences
// of each character, and display the result.