window.addEventListener("load", (e) => {
  // Selectores
  let formNewProduct = document.getElementById("formNewProduct");
  let imagen = document.getElementById("productImage");
  let inputs = document.querySelectorAll("#formNewProduct input");
  let textareas = document.querySelectorAll("#formNewProduct textarea");
  let selects = document.querySelectorAll("#formNewProduct select");

  // Campos errores
  let errorImagen = document.querySelector("#errorImagen");
  let errorModelo = document.querySelector("#errorModelo");
  let errorPrecio = document.querySelector("#errorPrecio");
  let errorDescCort = document.querySelector("#errorDescCort");
  let errorDescLarg = document.querySelector("#errorDescLarg");
  let errorMarca = document.querySelector("#errorMarca");
  let errorCategoria = document.querySelector("#errorCategoria");
  let errorGenero = document.querySelector("#errorGenero");

  const campos = {
    // falta imagen
    imagen: false,
    marca: false,
    modelo: false,
    precio: false,
    categoria: false,
    genero: false,
    descCorta: false,
    descLarga: false,
  };
  /* VALIDACION IMAGEN */
  imagen.addEventListener("blur", function () {
    let nombreImagen = imagen.value;

    function obtenerExtension(nombreImagen) {
      return nombreImagen.split(".").pop();
    }
    let extensionImagen = obtenerExtension(nombreImagen);
    let extAceptadas = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"];

    if (extAceptadas.indexOf(extensionImagen) === -1) {
      campos.imagen = false;
      errorImagen.innerHTML = "* Debes seleccionar una imagen JPG, JPEG o PNG";
    } else {
      campos.imagen = true;
      errorImagen.innerHTML = "";
    }
  });

  const validarInputs = (e) => {
    switch (e.target.name) {
      // Validacion Modelo
      case "model":
        if (e.target.value == "") {
          errorModelo.innerHTML = "* Debes ingresar un modelo";
          campos.modelo = false;
        } else if (e.target.value.length < 2) {
          errorModelo.innerHTML = "* El modelo debe ser válido";
          campos.modelo = false;
        } else {
          errorModelo.innerHTML = "";
          campos.modelo = true;
        }
        break;
      // Validacion Precio
      case "price":
        if (e.target.value == 0) {
          errorPrecio.innerHTML = "* El precio no puede ser $0";
          campos.precio = false;
        } else if (e.target.value > 0 && e.target.value < 5) {
          errorPrecio.innerHTML = "* El precio debe ser mayor que $5";
          campos.precio = false;
        } else {
          errorPrecio.innerHTML = "";
          campos.precio = true;
        }
        break;
    }
  };
  const validarTextareas = (e) => {
    switch (e.target.name) {
      // Validacion Desc Corta
      case "shortDescription":
        if (e.target.value == "") {
          errorDescCort.innerHTML = "* Debes ingresar una descripción breve";
          campos.descCorta = false;
        } else if (e.target.value.length < 10) {
          errorDescCort.innerHTML = "* Ingresa una descripcion mas extensa";
          campos.descCorta = false;
        } else {
          errorDescCort.innerHTML = "";
          campos.descCorta = true;
        }
        break;
      case "longDescription":
        // Validacion descripcion larga
        if (e.target.value == "") {
          errorDescLarg.innerHTML = "* Debes ingresar una descripción completa";
          campos.descLarga = false;
        } else if (e.target.value.length < 20) {
          errorDescLarg.innerHTML = "* Ingresa una descripcion mas extensa";
          campos.descLarga = false;
        } else {
          errorDescLarg.innerHTML = "";
          campos.descLarga = true;
        }

        break;
    }
  };
  const validarSelects = (e) => {
    switch (e.target.name) {
      case "brand":
        if (e.target.value == "Seleccionar") {
          errorMarca.innerHTML = "* Debes seleccionar una marca";
          campos.marca = false;
        } else {
          errorMarca.innerHTML = "";
          campos.marca = true;
        }
        break;
      case "category":
        if (e.target.value == "Seleccionar") {
          errorCategoria.innerHTML = "* Debes seleccionar una categoria";
          campos.categoria = false;
        } else {
          errorCategoria.innerHTML = "";
          campos.categoria = true;
        }
        break;
      case "genre":
        if (e.target.value == "Seleccionar") {
          errorGenero.innerHTML = "* Debes seleccionar un genero";
          campos.genero = false;
        } else {
          errorGenero.innerHTML = "";
          campos.genero = true;
        }
        break;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarInputs);
    input.addEventListener("blur", validarInputs);
  });

  textareas.forEach((textA) => {
    textA.addEventListener("keyup", validarTextareas);
    textA.addEventListener("blur", validarTextareas);
  });

  selects.forEach((select) => {
    select.addEventListener("keyup", validarSelects);
    select.addEventListener("blur", validarSelects);
  });

  // window.addEventListener("keydown", function (e) {
  //    tecla = e.key;
  //    if (tecla == "x") {
  //       alert(imagenAprobada);
  //    }
  // });
  formNewProduct.addEventListener("submit", (e) => {
    if (!campos.imagen) {
      errorImagen.innerHTML = "* Este campo no es valido";
      e.preventDefault();
    }
    if (!campos.marca) {
      errorMarca.innerHTML = "* Este campo no es valido";
    }
    if (!campos.modelo) {
      errorModelo.innerHTML = "* Este campo no es valido";
    }
    if (!campos.precio) {
      errorPrecio.innerHTML = "* Este campo no es valido";
    }
    if (!campos.categoria) {
      errorCategoria.innerHTML = "* Este campo no es valido";
    }
    if (!campos.genero) {
      errorGenero.innerHTML = "* Este campo no es valido";
    }
    if (!campos.descCorta) {
      errorDescCort.innerHTML = "* Este campo no es valido";
    }
    if (!campos.descLarga) {
      errorDescLarg.innerHTML = "* Este campo no es valido";
    }
    if (
      !campos.imagen ||
      !campos.marca ||
      !campos.modelo ||
      !campos.precio ||
      !campos.categoria ||
      !campos.genero ||
      !campos.descCorta ||
      !campos.descLarga
    ) {
      document.getElementById("erroresNewProd").style.display = "block";
      e.preventDefault();
    }
  });
});
