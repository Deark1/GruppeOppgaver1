const innloging = { kontonummer: "10712345678", passord: "1234567" }; //Her kan du bytte passord og kontonummer om du vil.

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
    const kontonummerInput = document.querySelector("#kontonummer");
    const buttonEl = document.querySelector("#loginnbutton");

    
    kontonummerInput.addEventListener("keydown", (e) => {
        if (["e", "E", "+", "-", "."].includes(e.key)) {
            e.preventDefault();
        }
    });


    kontonummerInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, ""); 
    });


    buttonEl.addEventListener("click", loggInn);
});

localStorage.setItem("brukernavn", "Furryblast");
localStorage.setItem("passord", "Banan");

