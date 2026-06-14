const leer = require("prompt-sync")()
let productos = []
let stocProductos = []
function menu() {
    console.log('-------- Menu --------')
    console.log('1 agregar producto ')
    console.log('2 agregar stock')
    console.log('3 Mostrar estadisticas ')
    console.log('4 mostrar todos los productos')
    console.log('5 vender productos ')
    console.log('6 eliminar producto')
    console.log('7 salir ')
    return leer('ingrese su opcion ')
}

let opcion
do {
    opcion = menu()
    switch (opcion) {
        case '1':
            let producto = leer('Ingrese el nombre del producto: ')
            productos.push(producto)
            stocProductos.push(0)
            console.clear()

            break
        case '2':
            let nombre = leer('ingrese el nombre del producto ')
            let indice = productos.findIndex(p => p == nombre)
            if (indice != -1) {
                let cantidad = leer('Ingrese cantidad del producto: ')
                stocProductos[indice] += parseInt(cantidad)
            } else {
                console.log('el producto no existe ')
            }
            break
        case '3':
            let contadorProductos = 0
            let acomulador = 0
            for (let i in productos) {
                contadorProductos++
                acomulador += stocProductos[i]
            }
            console.log("la cantidad de productos es: ", contadorProductos, ' y el stock es: ', acomulador)
            break
        case '4':
            for (let indice in productos) {
                console.log("producto: ", productos[indice], " stock: ", stocProductos[indice])
            }
            break
        case '5':
            let nombre2 = leer('ingrese el nombre del producto ')
            let indice2 = productos.findIndex(p => p == nombre2)
            if (indice2 != -1) {

                let cantidad = leer('Ingrese cantidad del producto que va a vender : ')
                if (cantidad > stocProductos[indice2]) {
                    stocProductos[indice2] -= parseInt(cantidad)
                } else {

                }

            } else {
                console.log('el producto no existe ')
            }
            break
        case '6':
            let nombre3 = leer('ingrese el nombre del producto ')
            let indice3 = productos.findIndex(p => p == nombre3)
            if (indice3 != -1) {
                productos.splice(indice3, 1)
                console.log('el producto fue eliminado ')
            } else {
                console.log('el producto no existe ')
            }
            break;
    }
} while (opcion !== '7')

