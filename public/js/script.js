//Lado del cliente

const socket = io();

var enviarDatos = document.getElementById("enviarDatos");

enviarDatos.addEventListener("submit", (e)=>{
    e.preventDefault();
    var mensaje = document.getElementById("mensaje").value;
    var chatbot = document.getElementById("chatbot");

    socket.emit("mensaje",mensaje);
    socket.on("respuesta",(respuesta)=>{
        chatbot.innerHTML = "<tr><td>ChatBot: "+respuesta+"</td></tr>";
    });
});
