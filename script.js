function moverCarrusel(id, n) {
  const carrusel = document.getElementById(id);
  const imgs = carrusel.getElementsByTagName('img');
  let index = 0;

  // encontrar la imagen visible
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("mostrar")) {
      index = i;
      break;
    }
  }

  imgs[index].classList.remove("mostrar"); // ocultar actual
  let siguiente = index + n;
  if (siguiente >= imgs.length) siguiente = 0;
  if (siguiente < 0) siguiente = imgs.length - 1;

  imgs[siguiente].classList.add("mostrar"); // mostrar siguiente

  // actualizar indicador
  const indicadorId = "ind" + id.charAt(0).toUpperCase() + id.slice(1);
  const indicador = document.getElementById(indicadorId);
  if (indicador) {
    indicador.textContent = `${siguiente + 1} / ${imgs.length}`;
  }
}

// Inicializar carruseles
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carrusel').forEach((c, i) => {
    const imgs = c.getElementsByTagName('img');
    if (imgs.length > 0) imgs[0].classList.add("mostrar");

    // actualizar indicador al inicio
    const indicador = document.getElementById("ind" + c.id.charAt(0).toUpperCase() + c.id.slice(1));
    if (indicador) indicador.textContent = `1 / ${imgs.length}`;
  });
});