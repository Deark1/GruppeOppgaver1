let startSaldo = 100000;

function saldo(total, beløp) {
  return total - beløp;
}

function leggTilRad() {
  const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  const lastRow = table.rows[table.rows.length - 1];
  let forrigeSaldo = startSaldo;

  // Hent forrige saldo hvis eksisterer
  if (lastRow) {
    const prevSaldoInput = lastRow.cells[0].querySelector("input");
    if (prevSaldoInput && !isNaN(parseFloat(prevSaldoInput.value))) {
      forrigeSaldo = parseFloat(prevSaldoInput.value);
    }
  }

  const newRow = table.insertRow();

  // 1: SALDO
  const saldoCell = newRow.insertCell();
  const saldoInput = document.createElement("input");
  saldoInput.type = "number";
  saldoInput.value = forrigeSaldo;
  saldoInput.readOnly = true;
  saldoCell.appendChild(saldoInput);

  // 2: BELØP
  const beløpCell = newRow.insertCell();
  const beløpInput = document.createElement("input");
  beløpInput.type = "number";
  beløpInput.placeholder = "Beløp I NOK";
  beløpInput.addEventListener("input", () => {
    const beløpVerdi = parseFloat(beløpInput.value || 0);
    const nySaldo = saldo(forrigeSaldo, beløpVerdi);
    saldoInput.value = nySaldo;
  });
  beløpCell.appendChild(beløpInput);

  // 3: DATO
  const datoCell = newRow.insertCell();
  const datoInput = document.createElement("input");
  datoInput.type = "date";
  datoCell.appendChild(datoInput);

  // 4: MOTTAKER
  const mottakerCell = newRow.insertCell();
  const mottakerInput = document.createElement("input");
  mottakerInput.type = "email";
  mottakerInput.placeholder = "Mottaker Email";
  mottakerCell.appendChild(mottakerInput);

  // 5: KontoNummer 
  const KontoNummerCell = newRow.insertCell();
  const KontoNummerInput = document.createElement("input");

  KontoNummerInput.type = "tel";
  KontoNummerInput.placeholder = "12345678910";
  KontoNummerInput.maxLength = 11;
  KontoNummerInput.inputMode = "numeric";
  KontoNummerInput.autocomplete = "off";

  // Hindrer tastetrykk av spesialtegn som e, +, - osv.
  KontoNummerInput.addEventListener("keydown", (e) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  });

  // Fjerner ikke-tall under input
  KontoNummerInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Kun tall
  });

  KontoNummerCell.appendChild(KontoNummerInput);

  // Når man fyller ut felt og bytter fokus, lagres det
  [beløpInput, datoInput, mottakerInput, KontoNummerInput].forEach(input => {
    input.addEventListener("change", () => {
      const betaling = {
        saldo: saldoInput.value,
        beløp: beløpInput.value,
        dato: datoInput.value,
        mottaker: mottakerInput.value,
        kontonummer: KontoNummerInput.value
      };

      const gamle = JSON.parse(localStorage.getItem("betalinger")) || [];
      gamle.push(betaling);
      localStorage.setItem("betalinger", JSON.stringify(gamle));
    });
  });
}

// Legg til første rad automatisk når siden lastes
document.addEventListener("DOMContentLoaded", () => {
  leggTilRad();
});
