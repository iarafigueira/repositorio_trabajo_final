const carritoUsuario = [];

const carrito = (IDdeProducto) => {
  const compraUsuario = document.getElementById("compra-usuario");
  const productoEnCarrito = () => {
    let producto = productos.find(
      (producto) => producto.id == IDdeProducto
    );
    carritoUsuario.push(producto);
    producto.cantidad = 1;
    let div = document.createElement("div");
    div.classList.add(productoElegido);
    div.innerHTML = `<p>${producto.nombre}</p>
    <p>Precio: $${producto.precio}</p> 
    <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
    <button id="eliminar${producto.id}" class="eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
    compraUsuario.appendChild(div);
  };
  productoEnCarrito();
};

const mostrarProductos = (productos) => {
  const contenedorDeProductos = document.getElementById(
    "contenedor-de-productos"
  );
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h5 class="card-title text-center">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text text-center">Precio: $${producto.precio}</p>
      <button class="btn btn-primary" id=boton-producto${producto.id}>Añadir al carrito</button>
    </div>
  </div>`;
    contenedorDeProductos.appendChild(div);

    const botonProducto = document.getElementById(
      `boton-producto${producto.id}`
    );
    botonProducto.addEventListener("click", () => {
      alert(`El producto ${producto.nombre} fue agregado al carrito`);
      carrito(producto.id);
    });
  });
};

mostrarProductos(productos);

const modal = document.querySelector(".contenedor-modal");
const abrirCarrito = document.getElementById("abrir");
const cerrarCarrito = document.getElementById("cerrar)");
const modalCarrito = document.queryselector(".carrito-modal");

abrirCarrito.addEventListener("click", () => {
  modal.classList.toggle("modal-visible");
});

cerrarCarrito.addEventListener("click", () => {
  modal.classList.remove("modal-visible");
});

modal.addEventListener("click", () => {
  cerrarCarrito.click();
});

modalCarrito.addEventListener("click", (e) => {
  e.stopPropagation();
});