const innloging = { brukernavn: "Furryblast", passord: "banan" };

function loggInn() {
    const brukernavn = document.querySelector("#brukernavn").value;
    const passord = document.querySelector("#password").value;

    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Du er logget inn!");
        window.location.href = "sendside3.html";
    } else {
        alert("Feil brukernavn eller passord.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#loginnbutton");
    buttonEl.addEventListener("click", loggInn);
});

function send (){
    const kontonummer = document.querySelectorAll("#kontonummer").value;

    if (kontonummer.length == 11) {
        alert("Du har sendt penger til kontonummer: " + kontonummer);
    }
    else {
        alert("Feil kontonummer");
    }

}

localStorage.setItem("brukernavn", "Furryblast");
localStorage.setItem("passord", "Banan");
