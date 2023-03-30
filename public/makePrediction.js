async function predict() {
    // showing loading screen
    document.getElementById("analysing").style.visibility = "visible";
    // making button disabled while predicting
    document.getElementById("clickable-overlay").disabled = true;
    // now lets make the prediction, we use .then because the model is a promise
    // (this is confusing as a Python user, but useful so check it out if interested)
    await model.then(model => {

        // making the prediction
        const result = model.predict(inputTensorBatched);

        // alerting the result
        selection = num_classes[tf.argMax(result, 1).dataSync()[0]];
        //alert(selection);

        // disposing of all tensors
        inputTensor.dispose();
        inputTensorNormalized.dispose();
        inputTensorResized.dispose();
        inputTensorBatched.dispose();
    });

    // remove loading screen
    document.getElementById("analysing").style.visibility = "hidden";
    // making button enabled after predicting
    document.getElementById("clickable-overlay").disabled = false;
    get()
        .catch(err => console.log(err));
};