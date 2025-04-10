innloging = {brukernavn: "Furryblast", passord: "12345678"};

function logginn(){
    let brukernavn = document.getElementById("brukernavn").value;
    let passord = document.getElementById("passord").value;

    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Innlogging vellykket!");
    } else {
        alert("Feil brukernavn eller passord.");
    }
}