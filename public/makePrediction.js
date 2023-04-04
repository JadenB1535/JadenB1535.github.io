async function predict() {
    // now lets make the prediction, we use .then because the model is a promise
    // (this is confusing as a Python user, but useful so check it out if interested)
    // switch to loading screen
    window.location.href = "loading.html";
    document.getElementById('clickable-overlay').disabled = 'true';

    await model.then(async model => {

        // making the prediction
        const result = model.predict(inputTensorBatched);

        // storing result in session storage
        sessionStorage.setItem("Vegetable", num_classes[tf.argMax(result, 1).dataSync()[0]]);
        //alert(selection);

        // disposing of all tensors
        inputTensor.dispose();
        inputTensorNormalized.dispose();
        inputTensorResized.dispose();
        inputTensorBatched.dispose();
    });
};

