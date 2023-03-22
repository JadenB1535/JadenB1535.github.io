async function predict() {
    // now lets make the prediction, we use .then because the model is a promise
    // (this is confusing as a Python user, but useful so check it out if interested)
    model.then(model => {

        // making the prediction
        const result = model.predict(inputTensorBatched);

        // alerting the result
        document.getElementById("p1").innerHTML = num_classes[tf.argMax(result, 1).dataSync()[0]];

        // disposing of all tensors
        inputTensor.dispose();
        inputTensorNormalized.dispose();
        inputTensorResized.dispose();
        inputTensorBatched.dispose();
    });
};