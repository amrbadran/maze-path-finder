export async function trainPerceptronModel() {
  const response = await fetch("/api/perceptron", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  });

  const data = await response.json();
  console.log("Training Result:", data);
}
export async function getTrainedModel() {
  const response = await fetch("/api/perceptron", {
    method: "GET",
  });

  const data = await response.json();
  console.log("Trained Weights and Bias:", data);
}
