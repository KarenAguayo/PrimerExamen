const Titulo = document.querySelector("#titulo");
const Detalle = document.querySelector("#detalle");
const form = document.querySelector("#Post-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Titulo = titulo.value;
  const Detalle = detalle.value;

  div.innerHTML = "<p>" +"TITULO ES:" + Titulo +"EL DETALLE ES:" + Detalle + "</p>";
});
