const productos = [
    { nombre: "Producto 1", precio: 10, stock: 5 },
    { nombre: "Producto 2", precio: 20, stock: 3 },
    { nombre: "Producto 3", precio: 30, stock: 0 }
  ];
  
  const carrito = [];
  
  // Función para agregar productos al carrito
  function agregarAlCarrito(nombreProducto, cantidad) {
    const producto = productos.find(p => p.nombre === nombreProducto);
  
    if (!producto) {
      console.error("Producto no encontrado");
      return;
    }
  
    if (producto.stock < cantidad) {
      console.error("No hay suficiente stock");
      return;
    }
  
    const productoEnCarrito = carrito.find(p => p.nombre === nombreProducto);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
    } else {
      carrito.push({ nombre: nombreProducto, cantidad });
    }
  
    producto.stock -= cantidad;
  
    console.log("Producto agregado al carrito");
  }
  