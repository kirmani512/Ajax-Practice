console.log("Ajax")

let fetchData = document.getElementById('fetchBtn');

fetchData.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    console.log("Button clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'raza.txt', true);

    xhr.onprogress = function () {
        console.log("Downloading...");
    }

    xhr.onreadystatechange = function () {
        console.log("ready state is", xhr.readyState);
    }

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Error Occured Please Check again");
        }
    }

    xhr.send();
}