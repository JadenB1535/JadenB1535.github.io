async function predict() {



    await showLoading();
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

        // get()
        //     .catch(err => console.log(err));
    });

    await hideLoading();

};

async function showLoading() {
    //console.log("Helo");
    // showing loading screen
    document.getElementById("analysing").innerHTML = "Analyzing...please wait";
    // making button disabled while predicting
    document.getElementById("clickable-overlay").disabled = true;
}

async function hideLoading() {
    //console.log("Hel1o");

    // remove loading screen
    document.getElementById("p1").innerHTML = "Get started";
    // making button enabled after predicting
    document.getElementById("clickable-overlay").disabled = false;
}