const innloging = { kontonummer: "10712345678", passord: "banan" };

function loggInn() {
    const kontonummer = document.querySelector("#kontonummer").value.trim()
    const passord = document.querySelector("#password").value;

    const erGyldig = /^[0-9]{6,11}$/.test(kontonummer);

    if (!erGyldig) {
        alert("Kontonummer må være mellom 6 og 11 siffer, kun tall.");
        return;
    }

    if (kontonummer === innloging.kontonummer && passord === innloging.passord) {
        alert("Du er logget inn!");
        window.location.href = "sendside3.html";
    } else {
        alert("Feil kontonummer eller passord.");
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#loginnbutton");
    buttonEl.addEventListener("click", loggInn);
});

document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#loginnbutton");

    document.querySelector("#kontonummer").addEventListener("keydown", (e) => {
        if (["e", "E", "+", "-", "."].includes(e.key)) {
            e.preventDefault();
        }
    });

    buttonEl.addEventListener("click", loggInn);
});

localStorage.setItem("brukernavn", "Furryblast");
localStorage.setItem("passord", "Banan");
