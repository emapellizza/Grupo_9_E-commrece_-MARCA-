let talles = document.getElementById("size");
let colores = document.getElementById("color");
let stock = document.getElementById("quantity");

talles.addEventListener("change", (event) => {
    if (talles.value !== "Seleccionar") {
      colores.disabled = false;
   }
  const talle = event.target.value;
  fetch("localhost:3000")
    .then((info) => {
      return info.json();
    })
    .then();
});

colores.addEventListener("change", (event) => {
    if (talles.value !== "Seleccionar") {
      stock.disabled = false;
    }
});

talles.addEventListener("change", (event) => {
 const talleSeleccionado = event.target.value;
});

window.addEventListener("keypress", (e) => {
  let key = e.key;
  if (key == "x") {
    alert(talles.value);
    alert(colores.disabled);
  }
});
