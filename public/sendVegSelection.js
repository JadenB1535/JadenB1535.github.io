async function post() {
    // sending post request
    const response = await fetch('../sendVegSelection', {
        method: "POST",
        body: JSON.stringify({ vegetableName: selection }),
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
    if (json.length < 3) {
        json.forEach(i => {
            if (i.vegetableName == selection) {
                result = false;
            }
        })
    }
    if (result) {
        post()
            .catch(err => console.log(err));
    }
}