async function loadModel() {
    // load model.json
    alert("Model successfully loaded");
    model = tf.loadLayersModel('model.json');
};

loadModel();