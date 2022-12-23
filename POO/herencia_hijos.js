class Abuelo {
    dinero_abuelo

    herenciaAbuelo(dinero) {
        this.dinero_abuelo = dinero;

        return "El abuelo tiene $" + this.dinero_abuelo;
    }
}

class Padre extends Abuelo {
    dinero_padre

    herenciaPadre(dineroPadre) {
        this.dinero_padre = dineroPadre + this.dinero_abuelo;

        return "El padre tiene $" + this.dinero_padre;
    }
}

class Hijo extends Padre {
    dinero_hijo

    herenciaHijo(dineroHijo) {
        this.dinero_hijo = dineroHijo + this.dinero_padre;

        return "El hijo tiene $" + this.dinero_hijo;
    }
}

/** Primera instancia del primer hijo */

let padre = new Padre();
padre.herenciaAbuelo(1000);
console.log(padre.herenciaPadre(1500));

/** Segunda instancia del segundo hijo */

let hijo = new Hijo();
hijo.herenciaAbuelo(800);
hijo.herenciaPadre(1500);
console.log(hijo.herenciaHijo(500));