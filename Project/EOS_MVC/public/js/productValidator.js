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
    let errores = [1, 2, 3, 4, 5, 6];

    if (modelo.value.length < 2) {
      errores.push("Ingresar un modelo válido");
      modelo.style.border = "1px solid red";
    }
    if (shortDescription.value.length < 10) {
      errores.push("Ingresar una descripción válida");
      shortDescription.style.border = "1px solid red";
    }

    if (errores.length > 0) {
      body.classList.toggle("grey");
      for (let i = 0; i < errores.length; i++) {
        divErrores.innerHTML = "<p>" + errores[i] + "</p>";
      }
      e.preventDefault();
    }
  });

  //   window.addEventListener("keypress", function (e) {
  //     let key = e.key;
  //     if (key == "x") {
  //       alert(campos);
  //     }
  //   });
});
