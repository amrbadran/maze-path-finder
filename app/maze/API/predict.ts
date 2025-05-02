export const predict = async (model: any, input: any) => {
  const response = await fetch("/api/perceptron/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, input }),
  });

  const data = await response.json();
  console.log("Prediction result:", data);
};
