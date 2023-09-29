// Definir el inventario de productos como un objeto
const inventario = {
    producto1: { nombre: "Producto A", precio: 10, stock: 800 },
    producto2: { nombre: "Producto B", precio: 15, stock: 1200 },
    producto3: { nombre: "Producto C", precio: 20, stock: 500 },
    producto4: { nombre: "Producto D", precio: 25, stock: 1500 },
  };
  
  let stockCriticoEncontrado = false;
  for (const producto in inventario) {
    if (inventario[producto].stock < 1000) {
      console.log(`El producto "${inventario[producto].nombre}" tiene un stock crítico de ${inventario[producto].stock} unidades.`);
      stockCriticoEncontrado = true;
    }
  }
  if (!stockCriticoEncontrado) {
    console.log("El inventario está en buen estado. Todos los productos tienen stock suficiente.");
  }