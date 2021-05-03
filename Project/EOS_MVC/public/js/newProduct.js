window.addEventListener("load", function () {
  // Formulario
  let formNewProduct = document.getElementById("formNewProduct");

  // Campos Formulario
  let imagen = document.querySelector("#productImage");
  let errorImagen = document.querySelector("#errorImagen");

  let marca = document.querySelector("#brand");
  let errorMarca = document.querySelector("#errorMarca");

  let modelo = document.querySelector("#model");
  let errorModelo = document.querySelector("#errorModelo");

  let precio = document.querySelector("#price");
  let errorPrecio = document.querySelector("#errorPrecio");

  let categoria = document.querySelector("#category");
  let errorCategoria = document.querySelector("#errorCategoria");

  let genero = document.querySelector("#genre");
  let errorGenero = document.querySelector("#errorGenero");

  let descCorta = document.querySelector("#shortDescription");
  let errorDescCort = document.querySelector("#errorDescCort");

  let descLarga = document.querySelector("#longDescription");
  let errorDescLarg = document.querySelector("#errorDescLarg");

  let talle = document.querySelector("#size");
  let erroresTalle = document.querySelector("#erroresTalle");

  let color = document.querySelector("#color");
  let erroresColor = document.querySelector("#erroresColor");

  formNewProduct.addEventListener("submit", function (e) {
    let errores = 0;

    // Validacion imagen
    let nombreImagen = imagen.value;

    function obtenerExtension(nombreImagen) {
      return nombreImagen.split(".").pop();
    }
    let extensionImagen = obtenerExtension(nombreImagen);

    let aprobada = false;

    let extAceptadas = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"];

    if (extAceptadas.indexOf(extensionImagen) === -1 || nombreImagen == "") {
      errores = errores + 1;
      errorImagen.innerHTML = "* Debes seleccionar una imagen JPG, JPEG o PNG";
    } else {
      errorImagen.innerHTML = "";
    }

    // Validacion marca
    if (marca.value == "Seleccionar") {
      errores = errores + 1;
      errorMarca.innerHTML = "* Debes seleccionar una marca";
    } else {
      errorMarca.innerHTML = "";
    }
    // Validacion modelo
    if (modelo.value == "") {
      errores = errores + 1;

      errorModelo.innerHTML = "* Debes seleccionar un modelo";
    } else if (modelo.value.length < 2) {
      errores = errores + 1;
      errorModelo.innerHTML = "* El modelo debe ser más largo";
    } else {
      errorModelo.innerHTML = "";
    }
    // Validacion Precio
    if (precio.value <= 0) {
      errores = errores + 1;
      errorPrecio.innerHTML = "* El precio no puede ser $0";
    } else {
      errorPrecio.innerHTML = "";
    }
    // Validacion categoria
    if (categoria.value == "Seleccionar") {
      errores = errores + 1;
      errorCategoria.innerHTML = "* Debes seleccionar una categoria";
    } else {
      errorCategoria.innerHTML = "";
    }
    // Validacion genero
    if (genero.value == "Seleccionar") {
      errores = errores + 1;
      errorGenero.innerHTML = "* Debes seleccionar un genero";
    } else {
      errorGenero.innerHTML = "";
    }
    // Validacion descripcion corta
    if (descCorta.value == "") {
      errores = errores + 1;
      errorDescCort.innerHTML = "* Debes ingresar una descripción breve";
    } else if (descCorta.value.length < 10) {
      errores = errores + 1;
      errorDescCort.innerHTML = "* Ingresa una descripcion mas extensa";
    } else {
      errorDescCort.innerHTML = "";
    }
    // Validacion descripcion larga
    if (descLarga.value == "") {
      errores = errores + 1;
      errorDescLarg.innerHTML = "* Debes ingresar una descripción completa";
    } else if (descLarga.value.length < 20) {
      errores = errores + 1;
      errorDescLarg.innerHTML = "* Ingresa una descripcion mas extensa";
    } else {
      errorDescLarg.innerHTML = "";
    }
    // Validacion talle
    if (talle.value == "Seleccionar") {
      errores = errores + 1;
      erroresTalle.innerHTML = "* Debes seleccionar un talle";
    } else {
      erroresTalle.innerHTML = "";
    }
    // Validacion color
    if (color.value == "") {
      errores = errores + 1;
      erroresColor.innerHTML = "* Debes introducir un color";
    } else if (color.value.length < 3) {
      errores = errores + 1;
      erroresColor.innerHTML = "* Debes introducir un color válido";
    } else {
      erroresColor.innerHTML = "";
    }

    // Si hay errores no envío
    if (errores > 0) {
      e.preventDefault();
    }
  });
});
