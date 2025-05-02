let weights: number[] = [];
let bias = -1;
const MAX_EPOCHS = 1000;
export function trainPerceptron(
  data: { inputs: number[]; YActual: number }[],
  learningRate = 0.1,
  maxEpochs = 100
) {
  const numFeatures = data[0].inputs.length;
  weights = Array.from({ length: numFeatures }, () => Math.random() - 0.5);

  for (let epoch = 0; epoch < maxEpochs; epoch++) {
    let totalError = 0;

    for (const { inputs, YActual } of data) {
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

  return { weights, bias };
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
