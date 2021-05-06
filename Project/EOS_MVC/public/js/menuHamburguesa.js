window.addEventListener("load", () => {
  let iconoMenuHamb = document.getElementById("icono-menu");
  let menuHamb = document.getElementById("menu-hamburguesa");
  let iconoCerrar = document.querySelector(".icono-cerrar");

  iconoMenuHamb.addEventListener("click", (e) => {
    // Alternamos estilos para el menu
    menuHamb.classList.toggle("active");
  });
  iconoCerrar.addEventListener("click", (e) => {
    // Alternamos estilos para el menu
    menuHamb.classList.toggle("active");
  });
});
