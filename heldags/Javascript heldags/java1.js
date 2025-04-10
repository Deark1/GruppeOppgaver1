innloging = {brukernavn: "Furryblast", passord: "12345678"};

function loggInn() {
    let brukernavn = document.querySelector("#brukernavn").value;
    let passord = document.querySelector("#passord").value;
    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Du er logget inn!");
        window.location.href = "index.html";
    }
    else {
        alert("Feil brukernavn eller passord.");
    }
}