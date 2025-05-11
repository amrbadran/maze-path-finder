let weights: number[] = [];
let bias = 0;

const MAX_EPOCHS = 60;

function splitData<T>(
  data: T[],
  trainRatio: number = 0.8
): { trainData: T[]; testData: T[] } {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  const splitIndex = Math.floor(data.length * trainRatio);
  return {
    trainData: shuffled.slice(0, splitIndex),
    testData: shuffled.slice(splitIndex),
  };
}

function normalize(data: { inputs: number[] }[]) {
  const numFeatures = data[0].inputs.length;
  const mins = Array(numFeatures).fill(Infinity);
  const maxes = Array(numFeatures).fill(-Infinity);

  for (const row of data) {
    for (let i = 0; i < numFeatures; i++) {
      mins[i] = Math.min(mins[i], row.inputs[i]);
      maxes[i] = Math.max(maxes[i], row.inputs[i]);
    }
  }

  for (const row of data) {
    for (let i = 0; i < numFeatures; i++) {
      row.inputs[i] = (row.inputs[i] - mins[i]) / (maxes[i] - mins[i] || 1);
    }
  }
}

export function trainPerceptron(
  data: { inputs: number[]; YActual: number }[],
  learningRate = 0.05,
  maxEpochs = MAX_EPOCHS
) {
  normalize(data);

  const { trainData, testData } = splitData(data, 0.8);
  const numFeatures = trainData[0].inputs.length;

  weights = Array.from({ length: numFeatures }, () => Math.random() - 0.5);
  bias = 0;

  for (let epoch = 0; epoch < maxEpochs; epoch++) {
    let totalError = 0;

    for (const { inputs, YActual } of trainData) {
      const prediction = predict(inputs, weights, bias);
      const error = YActual - prediction;

      if (error !== 0) {
        for (let i = 0; i < numFeatures; i++) {
          weights[i] += learningRate * error * inputs[i];
        }
        bias += learningRate * error;
        totalError += Math.abs(error);
      }
    }

    if (totalError === 0) {
      break;
    }
  }

  testPerceptron(testData);
  return { weights, bias };
}

export function testPerceptron(
  testData: { inputs: number[]; YActual: number }[]
) {
  let correct = 0;

  for (const { inputs, YActual } of testData) {
    const prediction = predict(inputs, weights, bias);
    if (prediction === YActual) {
      correct++;
    }
  }
  const accuracy = (correct / testData.length) * 100;
  console.log(`Test Accuracy: ${accuracy.toFixed(2)}%`);
}

export function predict(
  inputs: number[],
  weights: number[],
  bias: number
): number {
  let sum = bias;
  for (let i = 0; i < inputs.length; i++) {
    sum += weights[i] * inputs[i];
  }
  return sum > 0 ? 1 : 0;
}

export function getModel() {
  return { weights, bias };
}
