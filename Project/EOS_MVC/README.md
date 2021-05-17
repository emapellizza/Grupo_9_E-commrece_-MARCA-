## Detalle de producto

- Select para talles
- Select color y stock deshabilitados
  <select id="talles">
  <select id="color" disabled>
  <select id="stock" disabled>
  // Primer event listener a #talles
  // Cambia #talles, hacen fetch completan #color
  // Cambia #color, hacen fetch (talle y color) para obtener stock disponible
  // Completan el selector de #stock

  document.querySelector('#talles').addEventListener('change', (event) => {
  const talle = event.target.value;
  fetch('endpointConsultaColorYStock').then(res.json()).then(parsed => {
  document.querySelector('#color');
  })
  })

## Desde el lado del server

- Crean una ruta /api/metadata/ (sin parámetros de URL)
- Controlador maneja la lógica con parámetros de query
  fetch(api/metadata?talle=12&color=rojo)
  const controlador = (req, res) => {
  if(req.query.talle && !req.query.color) {
  // logica que corresponda a talle
  }
  if(req.query.talle && req.query.color){
  // logica
  }
  // consulta la base
  return res.json(datosDesdeBase)
  }
