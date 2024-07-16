'Use Strict';

function buscarNombre(lista, nombre) {
    if (lista.includes(nombre)) {
        alert(nombre +' está en la lista.');
    } else {
        alert(nombre + ' no está en la lista.');
    }
}

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
buscarNombre(students, "Pedro");  
buscarNombre(students, "Lucia");  
