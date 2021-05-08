/*
      
      if (password.value == "") {
        errores = errores + 1;
        errorpassword.innerHTML = "* Debes introducir una contrasena";
      } else if (password.value.length < 6) {
        errores = errores + 1;
        errorpassword.innerHTML = "* debe tener al menos 6 digitos";
      } else {
        errorpassword.innerHTML = "";

*/


  window.addEventListener("load", function () {
    // Formulario
    let formUpdateUser = document.getElementById("formUpdateUser");
  
    // Campos Formulario
    let imagen = document.querySelector("#imagenUsuario");
    let errorImagen = document.querySelector("#errorImagen");
  
    let firstName = document.querySelector("#firstName");
    let errorfirstName = document.querySelector("#errorfirstName");
  
    let lastName = document.querySelector("#lastName");
    let errorlastName = document.querySelector("#errorlastName");
  
    let bdate = document.querySelector("#dateOfBirth");
    let errorbdate = document.querySelector("#errorbdate");
  
    let email = document.querySelector("#email");
    let errorEmail = document.querySelector("#errorEmail");

    let phone = document.querySelector("#phone");
    let errorPhone = document.querySelector("#errorPhone");
  
    let password = document.querySelector("#password");
    let errorpassword = document.querySelector("#errorpassword");

    let confirmPassword = document.querySelector("#confirmPassword");
    let econfirmPassword = document.querySelector("#econfirmPassword");
  
    formUpdateUser.addEventListener("submit", function (e) {
      let errores = 0;
  
      // Validacion imagen
      let nombreImagen = imagen.value;
  
      function obtenerExtension(nombreImagen) {
        return nombreImagen.split(".").pop();
      }
      let extensionImagen = obtenerExtension(nombreImagen);
  
      let extAceptadas = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"];
  
      if (extAceptadas.indexOf(extensionImagen) === -1 || nombreImagen == "") {
        errores = errores + 1;
        errorImagen.innerHTML = "* Debes seleccionar una imagen JPG, JPEG o PNG";
      } else {
        errorImagen.innerHTML = "";
      }
     
      // Validacion nombre
      if (firstName.value == "") {
        
        errores = errores + 1;
        errorfirstName.innerHTML = "* Debes escribir un Nombre";
      } else if (firstName.value.length < 4) {
        errores = errores + 1;
        errorfirstName.innerHTML = "* El Nombre debe ser más largo";
      } else {
        errorfirstName.innerHTML = "";
      } 

       // Validacion Apellido
       if (lastName.value == "") {
       
        errores = errores + 1;
        errorlastName.innerHTML = "* Debes escribir un Apellido";
      } else if (lastName.value.length < 4) {
        errores = errores + 1;
        errorlastName.innerHTML = "* El Apellido debe ser más largo";
      } else {
        errorlastName.innerHTML = "";
      } 

      //validacion fecha
      if (bdate.value == "") {
        errores = errores + 1;
        errorbdate.innerHTML = "* Debes seleccionar una fecha";
      }else {
        errorbdate.innerHTML = "";
      }

      // Validacion Email
      if (email.value == "") {
        errores = errores + 1;
        errorEmail.innerHTML = "* Deve ingresar una direccion de Email";
      } else if (email.value.length < 4) {
        errores = errores + 1;
        errorEmail.innerHTML = "* ingrese Email valido ej: usuario@email.com";
      } else {
        errorEmail.innerHTML = "";
      }

      // Validacion telefono
      if (phone.value == "") {
        errores = errores + 1;
        errorPhone.innerHTML = "* Debes introducir un numero de  telefono";
      } else if (phone.value.length < 8) {
        errores = errores + 1;
        errorPhone.innerHTML = "* Debes introducir un telefono válido";
      } else {
        errorPhone.innerHTML = "";
      }
      

  
    // Si hay errores no envío
      if (errores > 0) {
        e.preventDefault();
      }
    });
  });
  

 