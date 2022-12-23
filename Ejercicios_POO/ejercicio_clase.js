class computadora {
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

    guardarDatos() {
        console.log("Sus archivos estan guardados");
    }

    crearArchivos(){
        console.log("Posee la capacidad necesaria para utilizarse en programacion");
    }

    jugarVideojuegos(){
        console.log("Estamos listos para jugar");
    }
}

class laptop extends computadora {
    add() {
        this.guardarDatos
        this.crearArchivos
        this.jugarVideojuegos
    }
}

class gamming extends computadora {
    add() {
        this.guardarDatos
        this.crearArchivos
        this.jugarVideojuegos
    }
}

class oficina extends computadora {
    add() {
        this.guardarDatos
        this.crearArchivos
        this.jugarVideojuegos
    }
}

const videojuegos = new Videojuegos ("hp", "15", 350);
videojuegos.jugarVideojuegos();
