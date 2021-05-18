window.addEventListener("load", (e) => {
  // Selectores
  let registerUser = document.getElementById("registerUser");
  let imagen = document.getElementById("userImage");
  let inputs = document.querySelectorAll("#registerUser input");

  // Campos errores
  let errorImagen = document.querySelector("#errorImagen");
  let errorfirstName = document.querySelector("#errorfirstName");
  let errorlastName = document.querySelector("#errorlastName");
  let errorbdate = document.querySelector("#errorbdate");
  let errorEmail = document.querySelector("#errorEmail");
       //para validacion de formato de mail
 // let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.\w{2,4}+)*$/;
  

  let errorPhone = document.querySelector("#errorPhone");
  let errorPassword = document.querySelector("#errorPassword");
  let econfirmPassword = document.querySelector("#econfirmPassword");

  imagen.addEventListener("change", (e) => {
    let reader = new FileReader();

    // Leemos el archivo subido y se lo pasamor al reader
    reader.readAsDataURL(e.target.files[0]);
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function () {
      let preview = document.getElementById("preview");
      let image = document.createElement("img");

      image.src = reader.result;
      preview.innerHTML = "";
      preview.append(image);
    };
  });

  const campos = {
    imagen: false,
    firstName: false,
    lastName: false,
    bdate: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
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
      // Validacion firstName
      case "firstName":
        if (e.target.value == "") {
          errorfirstName.innerHTML = "* Debes ingresar un nombre";
          campos.firstName = false;
        } else if (e.target.value.length < 3) {
          errorfirstName.innerHTML = "* El nombre debe ser mas largo";
          campos.firstName = false;
        } else {
          errorfirstName.innerHTML = "";
          campos.firstName = true;
        }
        break;
    // Validacion lastname
      case "lastName":
      if (e.target.value == "") {
        errorlastName.innerHTML = "* Debes ingresar un apellido";
        campos.lastName = false;
      } else if (e.target.value.length < 3) {
        errorlastName.innerHTML = "* El apellido debe ser mas largo";
        campos.lastName = false;
      } else {
        errorlastName.innerHTML = "";
        campos.lastName = true;
      }
      break;
      // Validacion telefono
      case "phone":
        if (e.target.value == "") {
          errorPhone.innerHTML = "* Debes ingresar un numero telefonico";
          campos.phone = false;
        } else if (e.target.value.length < 8) {
          errorPhone.innerHTML = "* El numero debe ser mas largo";
          campos.phone = false;
        } else {
          errorPhone.innerHTML = "";
          campos.phone = true;
        }
        break;

      // Validacion bdate
      case "dateOfBirth":
        if (e.target.value == "") {
          errorbdate.innerHTML = "* Debes ingresar una fecha";
          campos.bdate = false;
        } else {
          errorbdate.innerHTML = "";
          campos.bdate = true;
        }
        break;

      // Validacion email
      
      case "email":
        //let check = mailformat.test(e.target.value);
        if (e.target.value="") {
          errorEmail.innerHTML = "* Debes ingresar un email ej: algo@algo.com";
          campos.email = false;
        } else {
          errorEmail.innerHTML = "";
          campos.email = true;
        }
        break;

        // validacion confirmar password
      case "password":
        if (e.target.value="") {
          errorPassword.innerHTML = "* Debes ingresar password";
          campos.password = false;
        } else if(e.target.value.length <6){
          errorPassword.innerHTML = "* la contrasena debe tener al menos 6 digitos";
          campos.password = true;
        }else{
          errorPassword.innerHTML = "";
          campos.password = true;
        }
        break;

        case "confirmPassword":
          if(password.value != confirmPassword.value){
            econfirmPassword.innerHTML = "* las contrasenas no son iguales";
            campos.confirmPassword = false;
          }
          else if (e.target.value="") {
            econfirmPassword.innerHTML = "* Debes ingresar password";
            campos.confirmPassword = false;
          } else if(e.target.value.length <6){
            econfirmPassword.innerHTML = "* la contrasena debe tener al menos 6 digitos";
            campos.confirmPassword = true;
          }else{
            econfirmPassword.innerHTML = "";
            campos.confirmPassword = true;
          }
          break;

       /* if (e.target.value == "" || confirmPassword.value == ""){

          errorPassword.innerHTML = "* Debes introducir una contrasena";
          econfirmPassword.innerHTML = "* Debes introducir una contrasena";
        } else if(confirmPassword.value != password.value){
          errores = errores +1;
          errorpassword.innerHTML = "* contrasena distintas";
          econfirmPassword.innerHTML= "* contrasena distintas";
      } else {
        errorpassword.innerHTML="";
        econfirmPassword.innerHTML="";
      }*/
    } 
  };
  
  inputs.forEach((input) => {
    input.addEventListener("keyup", validarInputs);
    input.addEventListener("blur", validarInputs);
  });

  registerUser.addEventListener("submit", (e) => {
    if (!campos.imagen) {
      errorImagen.innerHTML = "* Este campo no es valido";
      e.preventDefault();
    }
    if (!campos.lastName) {
      errorlastName.innerHTML = "* Este campo no es valido";
    }
    if (!campos.firstName) {
      errorfirstName.innerHTML = "* Este campo no es valido";
    }
    if (!campos.phone) {
      errorPhone.innerHTML = "* Este campo no es valido";
    }
    if (!campos.email) {
      errorEmail.innerHTML = "* Este campo no es valido";
    }
    if (!campos.password) {
      errorPassword.innerHTML = "* Este campo no es valido";
    }
    if (!campos.confirmPassword) {
      econfirmPassword.innerHTML = "* Este campo no es valido";
    }
    if (!campos.bdate) {
      errorbdate.innerHTML = "* Este campo no es valido";
    }
   
    if (
      !campos.imagen ||
      !campos.lastName ||
      !campos.firstName ||
      !campos.phone ||
      !campos.email ||
      !campos.password ||
      !campos.confirmPasword ||
      !campos.bdate
    ) {                               
      document.getElementById("erroresRegUser").style.display = "block";
      e.preventDefault();
    }
  });
});