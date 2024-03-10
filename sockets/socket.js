function socket(io){
    io.on("connection",(socket)=>{
        socket.on("mensaje",(mensaje)=>{
            var respuesta = respuestas(mensaje);
            io.emit("respuesta",respuesta);
        });
    });
}

function respuestas(mensaje){

    switch(mensaje){
        case "Hola":
            return "Hola, ¿En que puedo ayudarte?";
        case "Revisa mi agenda":
            return "Tienes tu agenda libre el dia de hoy"
        case "Agenda una cita":
            return "Cita para alguno de estos evento:<br>Doctor<br>Dentista<br>Banco<br>Cumpleaños"
        case "Doctor":
        case "Dentista":
        case "Banco":
        case "Cumpleaños":
            return "Selecciona tu hora:<br>10 am<br>12 am<br>14am<br>15 am<br>"
        case "10":
        case "12":
        case "14":
        case "15":
            return "Cita agendada"
        case "Cancelar cita":
            return "Cita cancelada"
    }
}

module.exports = socket;
