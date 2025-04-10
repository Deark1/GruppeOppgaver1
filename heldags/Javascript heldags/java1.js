const innloging = { brukernavn: "o", passord: "1" };

function loggInn() {
    const brukernavn = document.querySelector("#brukernavn").value;
    const passord = document.querySelector("#password").value;

    if (brukernavn === innloging.brukernavn && passord === innloging.passord) {
        alert("Du er logget inn!");
        window.location.href = "sendside1.html";
    } else {
        alert("Feil brukernavn eller passord.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#loginnbutton");
    buttonEl.addEventListener("click", loggInn);
});
