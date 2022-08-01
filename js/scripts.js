let nombre = prompt("¿Cómo te llamas?");
alert("Hola "+nombre+ "! Qué bueno verte por acá. \nA continuación te mostramos las tortas que disponibles.");

const productos = [
  { id: 1, nombre: "Alfacookie", precio: 5340 },
  { id: 2, nombre: "Cheesecake Frutos Rojos", precio: 5940 },
  { id: 3, nombre: "Chocotorta Oreo", precio: 6600 },
  { id: 4, nombre: "Ferrero Nutella", precio: 5340 },
  { id: 5, nombre: "Chocotorta", precio: 5940 },
  { id: 6, nombre: "Marquise Beverly", precio: 5940 },
  { id: 7, nombre: "Megabrownie", precio: 5340 },
  { id: 8, nombre: "Red Velvet", precio: 6180 },
];

let usuarioCompra = prompt(
  "Ingresá el número de la torta que quieras llevar: \n1 - " +
    productos[0].nombre +
    " - $" +
    productos[0].precio +
    "\n2 - " +
    productos[1].nombre +
    " - $" +
    productos[1].precio +
    "\n3 - " +
    productos[2].nombre +
    " - $" +
    productos[2].precio +
    "\n4 - " +
    productos[3].nombre +
    " - $" +
    productos[3].precio +
    "\n5 - " +
    productos[4].nombre +
    " - $" +
    productos[4].precio +
    "\n6 - " +
    productos[5].nombre +
    " - $" +
    productos[5].precio +
    "\n7 - " +
    productos[6].nombre +
    " - $" +
    productos[6].precio +
    "\n8 - " +
    productos[7].nombre +
    " - $" +
    productos[7].precio
);

const carrito = [];

switch (usuarioCompra) {
  // Alfacookie
  case "1":
    alert(
      "Elegiste: " +
        productos[0].nombre +
        " - $" +
        productos[0].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((alfacookie = 5340));
    break;
  // Cheesecake
  case "2":
    alert(
      "Elegiste: " +
        productos[1].nombre +
        " - $" +
        productos[1].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((cheesecake = 5940));
    break;
  // Chocotorta Oreo
  case "3":
    alert(
      "Elegiste: " +
        productos[2].nombre +
        " - $" +
        productos[2].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((chocotortaOreo = 6600));
    break;
  // Ferrero Nutella
  case "4":
    alert(
      "Elegiste: " +
        productos[3].nombre +
        " - $" +
        productos[3].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((ferreroNutella = 5340));
    break;
  // Chocotorta
  case "5":
    alert(
      "Elegiste: " +
        productos[4].nombre +
        " - $" +
        productos[4].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((chocotorta = 5940));
    break;
  // Marquise Beverly
  case "6":
    alert(
      "Elegiste: " +
        productos[5].nombre +
        " - $" +
        productos[5].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((marquise = 5940));
    break;
  // Megabrownie
  case "7":
    alert(
      "Elegiste: " +
        productos[6].nombre +
        " - $" +
        productos[6].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((megabrownie = 5340));
    break;
  // Red Velvet
  case "8":
    alert(
      "Elegiste: " +
        productos[7].nombre +
        " - $" +
        productos[7].precio +
        ". \nContinua para elegir la forma de pago"
    );
    carrito.push((redVelvet = 6180));
    break;
}

//simulación de pago
let pago = prompt(
  "Seleccione la forma de pago \n1- Efectivo (15% de descuento) \n2- Tarjeta de débito \n3- Tarjeta de crédito \n4 - Transferencia (5% de descuento)"
);

// while (cuotas != 1 || cuotas != 2 || cuotas != 3 || cuotas != 4) { alert("La opción elegida no es correcta");

switch (pago) {
  //Efectivo
  case "1":
    let porcentaje = 15;
    function calcularPorcentaje(porcentaje, carrito) {
      return (porcentaje * carrito) / 100;
    }
    alert(
      "El descuento por abonar en efectivo es $" +
        calcularPorcentaje(porcentaje, carrito) +
        ". Deberás abonar $" +
        (carrito - calcularPorcentaje(porcentaje, carrito))
    );
    break;

  //Tarjeta de débito
  case "2":
    alert("El monto a abonar es $" + carrito);
    break;

  //Tarjeta de crédito
  case "3":
    let credito = prompt(
      "Seleccione las cuotas en las que desea abonar \n1- 1 cuota. \n2- 3 cuotas. \n3- 6 cuotas. \n4 - 12 cuotas."
    );
    switch (credito) {
      // 1 cuota
      case "1":
        alert("El monto a pagar es un total de $" + carrito);
        break;
      // 3 cuotas
      case "2":
        let porcentajeTresCuotas = 15;
        function tresCuotas(porcentajeTresCuotas, carrito) {
          return (porcentajeTresCuotas * carrito) / 100;
        }
        alert(
          "El recargo por abonar en tres cuotas es $" +
            tresCuotas(porcentajeTresCuotas, carrito) +
            ". El monto a pagar es un total de $" +
            (carrito - tresCuotas(porcentajeTresCuotas, carrito))
        );
        break;
      // 6 cuotas
      case "3":
        let porcentajeSeisCuotas = 25;
        function seisCuotas(porcentajeSeisCuotas, carrito) {
          return (porcentajeSeisCuotas * carrito) / 100;
        }
        alert(
          "El recargo por abonar en seis cuotas es $" +
            seisCuotas(porcentajeSeisCuotas, carrito) +
            ". El monto a pagar es un total de $" +
            (carrito - seisCuotas(porcentajeSeisCuotas, carrito))
        );
        break;
      // 12 cuotas
      case "4":
        let porcentajeDoceCuotas = 35;
        function doceCuotas(porcentajeDoceCuotas, carrito) {
          return (porcentajeDoceCuotas * carrito) / 100;
        }
        alert(
          "El recargo por abonar en doce cuotas es $" +
            doceCuotas(porcentajeDoceCuotas, carrito) +
            ". El monto a pagar es un total de $" +
            (carrito - doceCuotas(porcentajeDoceCuotas, carrito))
        );
        break;
    }
    break;
  //Transferencia
  case "4":
    let descuentoTransferencia = 5;
    function calcularTransferencia(descuentoTransferencia, carrito) {
      return (descuentoTransferencia * carrito) / 100;
    }
    alert(
      "El descuento por realizar el pago mediante transferencia es $" +
        calcularTransferencia(descuentoTransferencia, carrito) +
        ". Deberás abonar $" +
        (carrito - calcularTransferencia(descuentoTransferencia, carrito))
    );
    break;
}
// pago = prompt("Seleccione la forma de pago \n1- Efectivo (15% de descuento) \n2- Tarjeta de crédito \n3- Tarjeta de débito \n4 - Transferencia"); };

let gracias = alert("Muchas gracias por tu compra, esperamos que la disfrutes y que vuelvas pronto por aca! :)");

