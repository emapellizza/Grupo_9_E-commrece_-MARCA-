window.addEventListener("load", () => {
  let menu = document.getElementById("menu-usuario");
  let iconoUsuario = document.querySelector(".icono-usuario");

  let icono = document.querySelector(".icono");
  let container = document.querySelector(".contenedor-menu-usuario");

  container.addEventListener("mouseover", function () {
    menu.classList.add("activo");
    icono.style.opacity = "1";
    this.style.backgroundColor = "#e7e3dd";
    iconoUsuario.style.color = "#977a58";
  });
  container.addEventListener("mouseout", function () {
    menu.classList.remove("activo");
    icono.style.opacity = "0";
    this.style.backgroundColor = "";
    iconoUsuario.style.color = "black";
  });
});
