// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const mostrarLista = document.getElementById('listaAmigos');
let arrayAmigos = [];

function agregarAmigo() {
    let nombresAmigos = document.getElementById('amigo').value;
    arrayAmigos.push(nombresAmigos);

    // limpiar el array antes de mostrar la lista 
    listaAmigos.innerHTML = '';
    // mostrar los nombres en forma de lista vertical 
    for (let i of arrayAmigos) {
        let li = document.createElement('li');
        li.textContent = i;
        mostrarLista.appendChild(li);
    }
    console.log(arrayAmigos);
}
