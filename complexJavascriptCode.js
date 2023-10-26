// filename: complexJavascriptCode.js

/*
   This JavaScript code generates a complex and sophisticated neural network model
   to perform sentiment analysis on text data. It uses TensorFlow.js library for training
   and prediction.
*/

// Import required libraries
const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node');
const { Sequential, Layers } = require('@tensorflow/tfjs');

// Define the neural network architecture
const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [200] }));
model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

// Configure training process
model.compile({
  optimizer: tf.train.adam(),
  loss: 'binaryCrossentropy',
  metrics: ['accuracy'],
});

// Load and preprocess training data
const trainingData = require('./trainingData.json');
const { textToFeatures, labelToCategory } = require('./dataHelpers');

const textData = trainingData.map((item) => item.text);
const labelData = trainingData.map((item) => item.label);

const features = textData.map(textToFeatures);
const labels = labelData.map(labelToCategory);

// Train the model
model.fit(
  tf.tensor2d(features),
  tf.tensor2d(labels),
  {
    epochs: 10,
    batchSize: 32,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(6)}, accuracy = ${logs.acc.toFixed(6)}`);
      },
    },
  },
)
  .then(() => {
    console.log('Model trained successfully!');
    // Save the trained model
    const saveOptions = {
      fileSystem: tfn.io.createFileSystem('models'),
      modelTopology: model.toJSON(),
    };
    model.save('file://trainedModel', saveOptions)
      .then(() => {
        console.log('Model saved successfully!');
      })
      .catch((err) => {
        console.error('Error saving model:', err);
      });
  })
  .catch((err) => {
    console.error('Error training model:', err);
  });

// Define a function for sentiment prediction
function predictSentiment(text) {
  const input = tf.tensor2d([textToFeatures(text)]);
  const prediction = model.predict(input).arraySync()[0][0];
  const sentiment = prediction < 0.5 ? 'Negative' : 'Positive';
  return { sentiment, confidence: prediction };
}

// Example usage
const testText = 'I absolutely loved this movie!';
const sentimentPrediction = predictSentiment(testText);
console.log(`Text: ${testText}`);
console.log(`Sentiment: ${sentimentPrediction.sentiment}`);
console.log(`Confidence: ${sentimentPrediction.confidence.toFixed(6)}`);
