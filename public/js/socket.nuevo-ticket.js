
// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket'); // Id de un elemento de html de nuevo-ticket.html

socket.on( 'connect', function(){

    console.log('Conectado al servidor');
    

});


socket.on( 'disconnect', function() {

    console.log('Desconectado del servidor');
    

});

// Crear un listener que este escuchando el evento estadoACtual de socket.js
socket.on('estadoActual', function( res ){

    console.log(res);
    label.text( res.actual );

});

// Se escucha en el botón al hacer clik con jquery
$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function( siguienteTicket ) {

        label.text(siguienteTicket);

    });

});