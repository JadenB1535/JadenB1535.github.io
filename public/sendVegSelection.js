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
    var isValid = true;
    var vege = sessionStorage.getItem("Vegetable");
    // sending get request
    const response = await fetch('../getSelectionData', {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
    });
    const json = await response.json();

    if (json.length != 0) {
        for (var i = 0; i < json.length; i++) {
            if (vege == null) {
                alert("Vegetable cannot be detected. Please try again.");
                isValid = false;
                break;
            }
            else if (json[i].vegetableName == vege) {
                alert("Vegetable already added. Please try again.");
                isValid = false;
                break;
            }
        }
    }

    if (isValid) {
        alert("Vegetable successfully added!");
        post(vege)
            .catch(err => console.log(err));
    }


    sessionStorage.clear();
    window.location.href = "index.html";
}



get()
    .catch(err => {
        alert(err);
        window.location.href = "index.html";
    }
    );


