async function makeClickable() {
    // make button clickable
    if (model != null) {
        document.getElementById("clickable-overlay").disabled = false;
    }
}

function loadImage() {
    document.querySelector("#inputImage").addEventListener("change", function () {
        const fr = new FileReader();
        fr.addEventListener("load", () => {
            const img = new Image();
            img.src = fr.result;
            document.querySelector("#image").setAttribute("src", fr.result);
            if (document.querySelector("#image").src != null) {
                inputTensor = tf.browser.fromPixels(document.querySelector("#image"));
                inputTensorResized = inputTensor.toFloat();
                const offset = tf.scalar(255.0);
                inputTensorNormalized = inputTensorResized.div(offset);
                inputTensorBatched = inputTensorNormalized.expandDims(0);
            }
        });
        if (this.files[0] != null) {
            fr.readAsDataURL(this.files[0]);
        }
    });
}


makeClickable();
loadImage();