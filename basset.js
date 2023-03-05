
var edad = prompt("Ingrese su edad antes de empezar:   ");

if(edad >18){
    alert("Bienvenido");
}else{
    alert("Es menor de edad, está por entrar al siguiente sitio bajo su responsabilidad");
}


function calcularCostoTotal(precioProducto, ubicacion) {
    var costoEnvio;
    var costoTotal;
    if (ubicacion === "San Nicolás" || ubicacion === "40 km a la redonda de San Nicolás") {
      costoEnvio = 0;
    } else {
      costoEnvio = 800;
    }
    
    costoTotal = precioProducto + costoEnvio;
    return costoTotal;
  }
  


  var precioProducto = 1000;
  var ubicacion = "San Nicolás";
  var costoTotal = calcularCostoTotal(precioProducto, ubicacion);
  console.log(costoTotal); 

  var precioProducto = 1000;
  var ubicacion = "Rosario";
  var costoTotal = calcularCostoTotal(precioProducto, ubicacion);
  console.log(costoTotal); 










