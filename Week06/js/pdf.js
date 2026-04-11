function descargarPDF() {
  const elemento = document.querySelector(".pagina");

  const opciones = {
    margin: 10,
    filename: 'Historia.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4' }
  };

  html2pdf().set(opciones).from(elemento).save();
}