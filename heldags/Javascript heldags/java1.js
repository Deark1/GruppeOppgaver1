innloging = {brukernavn: "Ola Normann", passord: "123456"};


document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#logginnbutton");
    buttonEl.addEventListener("click", loggInn);
    })
    
function loggInn() {
    const brukernavn = document.querySelector("#brukernavn").value;
    const passord = document.querySelector("#password").value;
    let buttonEl= document.querySelector("#logginnbutton");
    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Du er logget inn!")
        window.location.href = "sendside1.html";
    }
    else {
        alert("Feil brukernavn eller passord.");
    }
}

