function descargarPDF() {
  const elemento = document.querySelector(".container");

  if (!elemento) {
    alert("Error: content not found");
    return;
  }

  const opciones = {
    margin: 10,
    filename: 'Clinical_History.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opciones).from(elemento).save();
}