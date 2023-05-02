async function predict() {
    
    // disable the get started button
    document.getElementById('clickable-overlay').disabled = 'true';

    await model.then(async model => {
        // making the prediction
        const result = model.predict(tensor);

        // storing result in session storage
        
            sessionStorage.setItem("Vegetable", num_classes[tf.argMax(result, 1).dataSync()[0]]);
        
        //alert(selection);

        // disposing of all tensors
        tensor.dispose();
        // inputTensor.dispose();
        // inputTensorNormalized.dispose();
        // inputTensorResized.dispose();
        // inputTensorBatched.dispose();
    });

    // switch to loading screen
    window.location.href = "loading.html";
};

