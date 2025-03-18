const listaAmigos = [];
const inputAmigo = document.getElementById("nombres");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function añadirAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Ingrese un nombre correctamente");
        return;
    }
    listaAmigos.push(nombre);
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    ulListaAmigos.appendChild(listItem);
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const ganador = listaAmigos[randomIndex];
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `El amigo secreto es: ${ganador}`;
    ulResultado.appendChild(resultadoItem);
    ulListaAmigos.style.display = "none";
}