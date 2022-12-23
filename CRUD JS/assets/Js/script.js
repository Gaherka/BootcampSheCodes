var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Eliminar()
    }
}
function Leer() {
    let DataForm = {}
    DataForm["nombre"] = document.getElementById("nombre").value
    DataForm["apellido"] = document.getElementById("apellido").value
    DataForm["pais"] = document.getElementById("pais").value
    DataForm["ciudad"] = document.getElementById("ciudad").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.nombre
    columna2 = Fila.insertCell(1).innerHTML = data.apellido
    columna3 = Fila.insertCell(2).innerHTML = data.pais
    columna4 = Fila.insertCell(3).innerHTML = data.ciudad
    columna5 = Fila.insertCell(4).innerHTML = `<input class="submit" type="button" onClick="Editar(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrar(this)" value="Eliminar" >`
    document.getElementById("nombre").focus()
    Eliminar()
}

function Eliminar() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("pais").value = ""
    document.getElementById("ciudad").value = ""
    Fila = null
}

function Editar(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nombre").value = Fila.cells[0].innerHTML
    document.getElementById("apellido").value = Fila.cells[1].innerHTML
    document.getElementById("pais").value = Fila.cells[2].innerHTML
    document.getElementById("ciudad").value = Fila.cells[3].innerHTML
}

function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nombre
    Fila.cells[1].innerHTML = DataForm.apellido
    Fila.cells[2].innerHTML = DataForm.pais
    Fila.cells[3].innerHTML = DataForm.ciudad
    document.getElementById("nombre").focus()
}

function Borrar(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Eliminar()
    }
}
