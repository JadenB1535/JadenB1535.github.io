async function post(vege) {
    // sending post request
    const response = await fetch('../sendVegSelection', {
        method: "POST",
        body: JSON.stringify({ vegetableName: vege }),
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    const json = await response.json();
    console.log(json);
}

async function get() {
    var vege = sessionStorage.getItem("Vegetable");
    // sending get request
    const response = await fetch('../getSelectionData', {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    const json = await response.json();
    alert(json.length);
    for (var i = 0; i < json.length + 1; i++) {
        if (vege == null) {
            alert("Vegetable cannot be detected. Please try again.");
            break;
        }
        else if (i.vegetableName == vege) {
            alert("Vegetable already added or may be invalid. Please try again.");
            break;
        }
        else {
            alert("Vegetable successfully added!");
            post(vege)
                .catch(err => console.log(err));
            break;
        }
    }
    sessionStorage.clear();
    window.location.href = "index.html";
}



get()
    .catch(err => console.log(err));
