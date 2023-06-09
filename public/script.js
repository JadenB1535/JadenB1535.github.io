//const model = loadModel();// load model immediately to avoid delay when user clicks 'Predict'
// const num_classes = ['Bok Choy', 'Broccoli', 'Cabbage', 'Carrot', 'Cucumber', 'Garlic', 'Ginger', 'Napa Cabbage', 'Potato', 'Red Onion', 'Tomato'];
// let inputTensor = null;
// let inputTensorNormalized = null;
// let inputTensorResized = null;
// let inputTensorBatched = null;

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         document.getElementById('timeline' + (slideIndex - 1).toString()).style.opacity = "0";
//         document.getElementById('timeline' + (slideIndex - 1).toString()).style.width = "0%";
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "block";

//     document.getElementById('timeline' + slideIndex).style.opacity = "1";
//     document.getElementById('timeline' + slideIndex).style.width = "100%";
//     if (slideIndex != 1) {
//         document.getElementById('timeline' + (slideIndex - 1).toString()).style.width = "0%";
//         document.getElementById('timeline' + (slideIndex - 1).toString()).style.opacity = "0";
//     }
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

// document.querySelector("#inputImage").addEventListener("change", function () {
//     const fr = new FileReader();

//     fr.addEventListener("load", () => {
//         const img = new Image();
//         img.src = fr.result;
//         document.querySelector("#image").setAttribute("src", fr.result);
//         if (document.querySelector("#image").src != null) {
//             inputTensor = tf.browser.fromPixels(document.querySelector("#image"));
//             inputTensorResized = inputTensor.toFloat();
//             const offset = tf.scalar(255.0);
//             inputTensorNormalized = inputTensorResized.div(offset);
//             inputTensorBatched = inputTensorNormalized.expandDims(0);
//             //
//             //inputTensor = tf.expandDims(inputTensor, axis=0);
//             //console.log(inputTensorBatched.shape);
//         }

//     });

//     if (this.files[0] != null) {
//         fr.readAsDataURL(this.files[0]);
//     }
// });



    // async function loadModel() {
    //     const model = await tf.loadLayersModel('model.json');
    //     //alert("model loaded");
    //     document.getElementById("proceedBtn").style.pointerEvents = "auto";
    //     document.getElementById("proceedBtn").style.opacity = "1";
    //     document.getElementById("p1").innerHTML = "Get started";
    //     return model;
    // };

    // function predict(model) {

    //     // document.getElementById("p1").innerHTML = "Analysing image...";
    //     // document.getElementById("proceedBtn").style.pointerEvents = "none";
    //     // document.getElementById("proceedBtn").style.opacity = "0.8";
    //     // first we get the value in the input field
    //     //const inputImage = document.getElementById('inputImage').value;
    //     //var inputTensor = tf.tensor([parseFloat(inputImage)]);  // then convert to tensor
    //     //const inputTensor = tf.expandDims(tf.tensor([parseInt(inputImage)]), 0);  // then convert to tensor
    //     //const inputTensor = tf.browser.fromPixels(inputImage);
    //     // inputTensor = tf.expandDims(inputTensor, axis=0);
    //     // inputTensor = tf.expandDims(inputTensor, axis=0);
    //     // inputTensor = tf.expandDims(inputTensor, axis=0);
    //     //console.log(inputTensor.shape);

    //     // now lets make the prediction, we use .then because the model is a promise
    //     // (this is confusing as a Python user, but useful so check it out if interested)
    //     model.then(model => {
    //         //let array = [];
    //         let result = model.predict(inputTensorBatched);
    //         //let prediction = tf.softmax(result);
    //         result.print();
    //         //array = result.dataSync();
    //         //let a = tf.tensor1d(array);
    //         //a = tf.softmax(a);
    //         alert(num_classes[tf.argMax(result, 1).dataSync()[0]]);
    //         //console.log(num_classes[]);
    //         inputTensor.dispose();
    //         inputTensorNormalized.dispose();
    //         inputTensorResized.dispose();
    //         inputTensorBatched.dispose();
    //         // result.dispose();
    //         // document.getElementById("proceedBtn").style.pointerEvents = "auto";
    //         // document.getElementById("p1").innerHTML = "Get started";
    //         // document.getElementById("proceedBtn").style.opacity = "1";
    //     });
    //};
    