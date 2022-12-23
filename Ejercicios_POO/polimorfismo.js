//Aplicando Polimorfismo con clases
/*class Empleo {
    nombre ='Doctor'
    salario = 1500
    rugro = 'salud'
    Experiencia = 5
    Especialidad = 'Pediatra'

    operar(){
        console.log('Operacion a corazon abierto')
    }

    redactarExpediente(){
        console.log('Expediente medico')
    }

    recetarMedicina(){
        console.log('Lista de medicamentos')
    }
}



class Enfermera extends Empleo {
 add(){
    this.redactarExpediente()
    this.recetarMedicina()

 }   
}

class Veterinario extends Empleo {
    add(){
        this.redactarExpediente
        this.recetarMedicina
    }
}

class Constructor {
    constructor(nombre,cargo,horario,salario,responsabilidades){
        this.nombre = nombre
        this.cargo = cargo
        this.horario = horario
        this.salario = salario
        this.responsabilidades = responsabilidades
    }
 
    datosConsturctor(){
        return 'Mi nombre es: '+this.nombre +' tengo el cargo de '+this.cargo+' mi salario actual es: '+this.salario+
        'mis responsabidades son '+this.responsabilidades
    }
}

class bricklayer extends Constructor{
    constructor(nombre,cargo,salario,herramientas,equipoSeguridad,rango){
        super(nombre,cargo,salario)
        this.herramientas =herramientas
        this.rango=rango
        this.equipoSeguridad=equipoSeguridad
    }

    imprimirDatos(){
        return 'mi cargo es '+this.cargo+' mis herramientas de trabajo son '+this.herramientas+' mi rango es '+this.rango+
        'mi vestimenta de trabajo es '+this.equipoSeguridad
    }

    datosConsturctor(){
        return 'mi rango es '+this.rango
    }
}

obj = new Constructor('Foncho','Jefe de ensambalje','7:00 am','$900','Liderar a los bricklayer')
console.log(obj.datosConsturctor())
obj2 = new bricklayer('','Capataz','','pala,cuchara y cita metrica','casco y botas','constructor')
console.log(obj2.imprimirDatos())
console.log(obj2.datosConsturctor())

*/
/*
//aplicando porlimorfismo getter y setter
const person = {
    firstName: 'Aquiles',
    lastName: 'Bailoyo',
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
      const fullName = name.split(' ');
      this.firstName = fullName[0];
      this.lastName = fullName[1];
      console.info(`${name} has been set as person's full name.`)
    }
  };

  // usando el _setter_
  person.fullName = 'Aquiles Moran';
  // usando el _getter_
  console.log(person.fullName);
*/
//Polimorfismo usando Prototype y aplicando Obejctos constructores 
/*

  const User = {
    active: false,
    sayHello() {
      console.log(`${this.name} says hi!`)
    }
  };
  
  const Student = {
    name: 'Morty',
    major: 'JavaScript'
  };
  
  const Professor = {
    name: 'Rick',
    teaching: ['JavaScript', 'NodeJS', 'Physics']
  };

  const Director = {
    name: 'Homer',
    grade: ['primero', 'segundo', 'tercero']
  };
  
  Object.setPrototypeOf(Student, User);
  Object.setPrototypeOf(Professor, User);
  Object.setPrototypeOf(Director, User);
  
  Student.active = true;
  
  const newUsers = [Student, Professor];
  
  newUsers.forEach(user => user.sayHello())

  const userAcademy = [Professor, Director,Student];
  userAcademy.forEach(user => user.sayHello())
  */

  const User = {
    active: false,
    describe() {
      console.log(`${this.name} says hi!`)
    }
  };
  
  const Student = {
    name: 'Morty',
    major: 'JavaScript',
    describe() {
      console.log(`${this.name} studies ${this.major}`);
    }
  };
  
  const Professor = {
    name: 'Rick',
    teaching: ['JavaScript', 'NodeJS', 'Physics'],
    describe() {
      console.log(`${this.name} teaches ${this.teaching}`);
    }
  };
  
  Object.setPrototypeOf(Student, User);
  Object.setPrototypeOf(Professor, User);
  
  Student.active = true;
  
  const newUsers = [Student, Professor];
  
  newUsers.forEach(user => user.describe())