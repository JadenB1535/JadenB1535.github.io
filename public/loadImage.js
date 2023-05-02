async function makeClickable() {
    // make button clickable
    if (model != null) {
        document.getElementById("clickable-overlay").disabled = false;
    }
}

function loadImage() {
    const fileInput = document.querySelector("#inputImage");

    fileInput.addEventListener("change", function () {

        const file = fileInput.files[0];

        const filePath = file.path || (window.URL || window.webkitURL).createObjectURL(file);

        document.getElementById("image").src = filePath;

        // create a new image element
        const img = new Image();

        // set the source of the image (assumes imagePath is a variable containing the path to the image file)
        img.src = filePath;

        // wait for the image to load
        img.onload = function () {
            // create a new canvas element
            const canvas = document.createElement('canvas');

            // set the size of the canvas to the desired input size of the model
            const inputSize = 224;
            canvas.width = inputSize;
            canvas.height = inputSize;

            // get the canvas context
            const ctx = canvas.getContext('2d');

            // draw the image onto the canvas at (0, 0) with the desired size
            ctx.drawImage(img, 0, 0, inputSize, inputSize);

            // get the pixel data from the canvas
            const pixelData = ctx.getImageData(0, 0, inputSize, inputSize).data;

            // normalize the pixel values to be between 0 and 1
            const imageData = [];
            for (let i = 0; i < pixelData.length; i += 4) {
                imageData.push(pixelData[i] / 255);
                imageData.push(pixelData[i + 1] / 255);
                imageData.push(pixelData[i + 2] / 255);
            }

            // create a new tensor from the normalized pixel data
            tensor = tf.tensor4d(imageData, [1, inputSize, inputSize, 3]);
            
            predict();
        };


        // const fr = new FileReader();
        // fr.addEventListener("load", () => {
        //     const img = new Image();
        //     img.src = fr.result;

        //     //tf.browser.fromPixels(document.querySelector("#image"));

        //     document.querySelector("#image").setAttribute("src", fr.result);
        //     if (document.querySelector("#image").src != null) {

        //         console.log(document.querySelector("#image").src);
        //         const img = new Image();



        //             // inputTensorResized = inputTensor.toFloat();
        //             // const offset = tf.scalar(255.0);
        //             // inputTensorNormalized = inputTensorResized.div(offset);
        //             // inputTensorBatched = inputTensorNormalized.expandDims(0);

        //     }
        // });
        // if (this.files[0] != null) {
        //     fr.readAsDataURL(this.files[0]);
        // }
    });
}


makeClickable();
loadImage();