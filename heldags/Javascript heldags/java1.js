innloging = {brukernavn: "Ola Normann", passord: "123456"};

function loggInn() {
    let brukernavn = document.querySelector("#brukernavn").value;
    let passord = document.querySelector("#passord").value;
    let buttonEl= document.querySelector("#logginnbutton");
    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Du er logget inn!")
    }
    else {
        alert("Feil brukernavn eller passord.");
    }
}