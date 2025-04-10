function sendTilLog() {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const rader = Array.from(table.rows);
  
    const transaksjoner = rader.map(rad => {
      return {
        saldo: rad.cells[0].querySelector("input").value,
        beløp: rad.cells[1].querySelector("input").value,
        dato: rad.cells[2].querySelector("input").value,
        mottaker: rad.cells[3].querySelector("input").value,
        kontoNummer: rad.cells[4].querySelector("input").value
      };
    });
  
    localStorage.setItem("transaksjonslogg", JSON.stringify(transaksjoner));
  
    window.location.href = "sendside2.5.html";
  }