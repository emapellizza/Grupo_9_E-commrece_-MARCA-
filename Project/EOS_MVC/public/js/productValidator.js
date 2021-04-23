window.addEventListener("load", function () {
  // Selectores!
  // Body
  const body = document.querySelector("body");
  // Formulario
  let form = document.getElementById("formNewProduct");

  // Campos Formulario
  let modelo = document.querySelector("#model");
  let descCorta = document.querySelector("#shortDescription");
  let descLarga = document.querySelector("#longDescription");
  let size = document.querySelector("#size");
  let color = document.querySelector("#color");
  let divErrores = document.querySelectorAll("div.errores");

  // Logica

  form.addEventListener("submit", function (e) {
    // Validacion campos vacíos
    e.preventDefault();
  });
});
