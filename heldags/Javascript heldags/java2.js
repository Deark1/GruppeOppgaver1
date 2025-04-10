let startSaldo = 100000;

function saldo(total, beløp) {
  return total - beløp;
}

function leggTilRad() {
  const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  const lastRow = table.rows[table.rows.length - 1];
  let forrigeSaldo = startSaldo;

  if (lastRow) {
    const prevSaldoInput = lastRow.cells[0].querySelector("input");
    if (prevSaldoInput && !isNaN(parseFloat(prevSaldoInput.value))) {
      forrigeSaldo = parseFloat(prevSaldoInput.value);
    }
  }

  const newRow = table.insertRow();

  const saldoCell = newRow.insertCell();
  const saldoInput = document.createElement("input");
  saldoInput.type = "number";
  saldoInput.value = forrigeSaldo;
  saldoInput.readOnly = true;
  saldoCell.appendChild(saldoInput);

  const beløpCell = newRow.insertCell();
  const beløpInput = document.createElement("input");
  beløpInput.type = "number";
  beløpInput.placeholder = "Beløp I NOK";
  beløpInput.addEventListener("input", () => {
    const ny = saldo(forrigeSaldo, parseFloat(beløpInput.value || 0));
    saldoInput.value = ny;
  });
  beløpCell.appendChild(beløpInput);

  const datoCell = newRow.insertCell();
  const datoInput = document.createElement("input");
  datoInput.type = "date";
  datoCell.appendChild(datoInput);

  const mottakerCell = newRow.insertCell();
  const mottakerInput = document.createElement("input");
  mottakerInput.type = "text";
  mottakerInput.placeholder = "Mottaker Email";
  mottakerCell.appendChild(mottakerInput);

  const kontoCell = newRow.insertCell();
  const kontoInput = document.createElement("input");
  kontoInput.type = "number";
  kontoInput.placeholder = "1234 567 8910";
  kontoCell.appendChild(kontoInput);

  // Når man fyller ut felt og bytter fokus, lagres det
  [beløpInput, datoInput, mottakerInput, kontoInput].forEach(input => {
    input.addEventListener("change", () => {
      const betaling = {
        saldo: saldoInput.value,
        beløp: beløpInput.value,
        dato: datoInput.value,
        mottaker: mottakerInput.value,
        kontonummer: kontoInput.value
      };

      const gamle = JSON.parse(localStorage.getItem("betalinger")) || [];
      gamle.push(betaling);
      localStorage.setItem("betalinger", JSON.stringify(gamle));
    });
  });
}

// Legg til første rad når siden lastes
document.addEventListener("DOMContentLoaded", leggTilRad);
