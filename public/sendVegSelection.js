async function post() {
    // sending post request
    const response = await fetch('../sendVegSelection', {
        method: "POST",
        body: JSON.stringify({ vegetableName: sessionStorage.getItem("Vegetable") }),
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    const json = await response.json();
    console.log(json);
}

async function get() {
    let result = true;
    // sending get request
    const response = await fetch('../getSelectionData', {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    const json = await response.json();
    json.forEach(i => {
        if (sessionStorage.getItem("Vegetable") == null) {
            result = false;
            alert("Vegetable cannot be detected. Please try again.");
        }
        else if (i.vegetableName == sessionStorage.getItem("Vegetable")) {
            result = false;
            alert("Vegetable already added or may be invalid. Please try again.");
        }
    })
    if (result) {
        post()
            .catch(err => console.log(err));
        alert("Vegetable successfully added!");
    }
    sessionStorage.clear();
    window.location.href = "index.html";
}


get()
    .catch(err => console.log(err));
