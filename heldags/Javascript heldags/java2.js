
    let startSaldo = 100000;
  
    function saldo(total, beløp) {
      let nySaldo = total - beløp;
      return nySaldo;
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
        const ny = saldo(forrigeSaldo, parseFloat(beløpInput.value || 0));
        saldoInput.value = ny;
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
    const KontoNummerCell=newRow.insertCell();
    const KontoNummerInput=document.createElement("input");
    KontoNummerInput.type="number";
    KontoNummerInput.placeholder="1234 567 8910"
    KontoNummerCell.appendChild(KontoNummerInput)
  }
    // Legg til første rad automatisk
    leggTilRad();
    
  
  