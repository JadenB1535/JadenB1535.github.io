async function loadModel() {
    // load model.json
    model = tf.loadLayersModel('model.json');
};

loadModel();