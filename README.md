Amigo Secreto 🎁

Descripción

Este proyecto es una sencilla aplicación web que permite agregar nombres de participantes y realizar un sorteo aleatorio para determinar el "Amigo Secreto" de cada uno. Es ideal para eventos, fiestas o reuniones donde se quiera organizar un intercambio de regalos de manera justa y divertida.

Características ✨

Agregar nombres de participantes a la lista.

Mostrar la lista de amigos ingresados.

Realizar un sorteo aleatorio.

Mostrar el resultado del sorteo en pantalla.

Interfaz simple y fácil de usar.

Instalación 🚀

Este proyecto solo necesita un navegador web para funcionar. No requiere instalación de dependencias.

Descarga o clona este repositorio.

git clone [https://github.com/tu-usuario/amigo-secreto.git](https://github.com/RenatoLR/6.Chalenge_Amigo_secreto)

Abre el archivo index.html en tu navegador.

¡Comienza a agregar amigos y sortear!

Uso 📝

Ingresa un nombre en el campo de texto.

Presiona el botón "Añadir Amigo" para agregarlo a la lista.

Una vez añadidos todos los participantes, presiona "Sortear Amigo Secreto".

Se mostrará un nombre aleatorio como resultado del sorteo.

Código Fuente 🖥️

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
