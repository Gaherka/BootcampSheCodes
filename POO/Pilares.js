
// Pilares de programacion orientada a objetos

// X Herencia => Es la capacidad de una clase(hija) a tener los atributos y metodos de la otra clase(padre).
// X Polimorfismo => Una clase, modifica el comportamiento de un metodo heredado.
//Encapsulamiento => Oculta atributos y metodos para que no sean accesibles por el usuario o otra clase
//Abstraccion => A traves de metodos especiales el usuario puede acceder a datos encapsulados

class Vehiculo{
    //constructor, atributos y metodos

    constructor(modelo,color,anio,puertas,motor,placa,tipoGasolina,traccion, kilometraje){
        this.modelo = modelo
        this.color = color;
        this.anio = anio;
        this.puertas = puertas;
        this.motor = motor;
        this.placa = placa;
        this.tipoGasolina = tipoGasolina;
        this.traccion = traccion;
        this.kilometraje = kilometraje;
        this.ruedas = 4;
    }

    encender(){
        return "Estoy encendido BRUM";
    }

    acelerar(){
        return "Estoy acelerando BRUM BRUM";

    }

    frenar(){
        return "Estoy frenando";

    }

    parkear(){
        return "Estoy parkeando TII TII TII"
    }

    apagar(){
        return "Estoy apagado BRUHT";
    }

    print(){
        return "El modelo de mi coche es "+this.modelo+" y su color es "+this.color+". \n"+"Es del año "+this.anio+" y cuenta con "+this.kilometraje+"."
    }

}

const coche1 = new Vehiculo("Audi A4","Gris",2023,4,"V6","P435785","Diesel","Trasera","0Km");
console.log(coche1.print());

class VehiculoDeLujo extends Vehiculo{
    
    //atributos, metodos y constructor
    constructor(modelo,color,anio,puertas,motor,placa,tipoGasolina,traccion, kilometraje,accesorios){
        super(modelo,color,anio,puertas,motor,placa,tipoGasolina,traccion, kilometraje);

        this.accesorios = accesorios;
    }


    print(){
        return "El modelo de mi coche es "+this.modelo+" y su color es "+this.color+". \n"+"Es del año "+this.anio+`\nEl cual lo compre con estos extras: ${this.accesorios}.`;
    }

    encender(){
        return "Soy un coche de lujo y estoy encendido BRUM";
    }

}

const cocheLujo1 = new VehiculoDeLujo("Audi RS6","Azul",2023,4,"V12","P435785","Diesel","4X4","0Km","Turbo, Panoramico y Asientos de Cuero");
console.log("------------COCHE NORMAL----------");
console.log(coche1.encender());
console.log(coche1.print());
console.log("------------COCHE DE LUJO----------");
console.log(cocheLujo1.encender());
console.log(cocheLujo1.print());
console.log("------------COCHE DE DEPORTIVO----------");

/*
class a {

    hola(){
        return "Hola";
    }
}

class b extends a{

}

class c extends b{

}

class d extends c{

}
const a1 = new a();
const b1 = new b();
const c1 = new c();
const d1 = new d();


console.log(d1.hola());
*/