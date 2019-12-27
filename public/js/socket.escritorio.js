// Comando para establecer la conexión
var socket = io();

// Lo siguiente actualmente no es valido en internet explorer ni edge
var searchParams = new URLSearchParams( window.location.search );

// Si no hay un información del escritorio se vuelve al index
if( !searchParams.has('escritorio') ) {

    window.location = 'index.html';
    throw new Error('El escritorio es necesario');

}


var escritorio = searchParams.get( 'escritorio' );
var label = $('small');

console.log(escritorio);

// Con jqueary acceso al texto que tiene para cambiar
$('h1').text('Escritorio: ' + escritorio);

// Función de atender el ticket
$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function( res ) {

        console.log(res);
        
        
        if( res === 'No hay tickets') {
            
            label.text(res);
            alert(res);
            return;
        }
        
        label.text( 'Ticket ' + res.numero );

    });

});