const filtrarPropiedades = () => {
  console.log("Filtrando propiedades");
  //tomar los valores de los inputs
  //validar que todos los campos tengan un valor
  //si todos tienen un valor, filtrar las propiedades//
  const cantidadDeCuartos = document.getElementById("cuartos").value;
  const metrosDesde = document.getElementById("desde").value;
  const metrosHasta = document.getElementById("hasta").value;
  //evaluar si tienen valores//
  if (cantidadDeCuartos && metrosDesde && metrosHasta) {
    mostrarPropiedades(cantidadDeCuartos, metrosDesde, metrosHasta);
  } else {
    alert("Todos los valores son obligatorios");
  }
};

const mostrarPropiedades = (rooms, desde, hasta) => {
  console.log(`Filtrando propiedades ${rooms} desde ${desde} hasta ${hasta}`);
  let galeria = document.querySelector(".propiedades");
  let propiedades = "";
  let cantidad = 0;
  //recorrer el propiedadesJSON
  for (const propiedad of propiedadesJSON) {
    if ((propiedad.rooms == rooms && propiedad.m >= desde && propiedad.m <= hasta) ||(rooms == "*" && desde == "*" && hasta == "*"))
      
    {
      propiedades += `<div class="propiedad">
       <div class="img" style="background-image: url(${propiedad.src})"></div>    
      <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
              <p>${propiedad.rooms} Cuartos</p>   
              <p>${propiedad.m} Metros</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info">Ver más</button>
      </section>
      </div>`;
      cantidad++;
    }
  }
  console.log(cantidad);
  galeria.innerHTML = propiedades;
  document.querySelector("#total").innerHTML = cantidad;
};
mostrarPropiedades('*', '*', '*');
