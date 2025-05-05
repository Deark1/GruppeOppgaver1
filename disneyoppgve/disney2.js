let navnEl = document.querySelector("input");
let resultatEl = document.querySelector("#resultat");
let knappEl = document.querySelector("#søk");
let figurTabellEl = document.querySelector("#figurTabell tbody");
let lagredeFigurer = new Set();

const disney = async () => {
    const url = "https://api.disneyapi.dev/character?page=1&pageSize=7438";
    const hent = await fetch(url);
    const json = await hent.json();
    let figur = json;

    let funnetKamper = false;

    // Tøm resultatet før vi viser nye resultater
    resultatEl.innerHTML = '';

    for (let i = 0; i < figur.data.length; i++) {
        // Sjekk om karakteren passer til input
        if (figur.data[i].name.toLowerCase().includes(navnEl.value.toLowerCase())) {
            funnetKamper = true;

            // Bygg opp HTML for å vise figuren
            resultatEl.innerHTML += `
                <div>
                    <p><strong>${figur.data[i].name}</strong></p>
                    <img src="${figur.data[i].imageUrl}" height="314" width="226"> <br>
                    <a href="${figur.data[i].sourceUrl}" target="_blank">Mer info</a>
                    <button class="leggTil" data-navn="${figur.data[i].name}" 
                            data-bilde="${figur.data[i].imageUrl}" 
                            data-link="${figur.data[i].sourceUrl}">Legg til i tabell</button>
                </div>`;
        }
    }

    if (!funnetKamper) {
        resultatEl.innerHTML = `<p>Ingen figurer funnet. Sjekk stavemåten eller prøv et annet navn.</p>`;
    }

    // Legg til event listeners for de dynamisk genererte "Legg til"-knappene
    document.querySelectorAll('.leggTil').forEach(knapp => {
        knapp.addEventListener('click', function() {
            const navn = this.getAttribute('data-navn');
            const bilde = this.getAttribute('data-bilde');
            const link = this.getAttribute('data-link');

            // Legg til figur i tabellen
            leggTilFigur(navn, bilde, link);
        });
    });
}

const leggTilFigur = (navn, bilde, link) => {
    // Unngå duplikater i tabellen
    if (lagredeFigurer.has(navn)) {
        alert("Denne figuren er allerede lagt til!");
        return;
    }

    lagredeFigurer.add(navn); // Legg til i settet for å hindre duplikater

    // Lag en ny rad i tabellen
    let rad = figurTabellEl.insertRow();
    rad.insertCell(0).textContent = navn;
    rad.insertCell(1).textContent = "Ukjent år"; // Årstall kan legges til senere hvis ønskes
    rad.insertCell(2).innerHTML = `<img src="${bilde}" height="100" width="75">`;
    rad.insertCell(3).innerHTML = `<a href="${link}" target="_blank">Mer info</a>`;
};

knappEl.addEventListener("click", disney);
