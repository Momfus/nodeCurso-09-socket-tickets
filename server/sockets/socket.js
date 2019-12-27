const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control.js');

const ticketControl = new TicketControl();

io.on('connection', (client) => {


    client.on('siguienteTicket', ( data, callback ) => {

        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente);
        

    });

    // Emitir un evento llamado 'estadoActual' que debe retornar el último ticket
    /*
        Debe retornar
        {
            actual: ticketControl.getUltimoTicket()   
        }
    */

    client.emit('estadoActual', {
                                actual: ticketControl.getUltimoTicket()   
                                });


    client.emit('estadoActual', {

        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()

    });

    client.on('atenderTicket', (data, callback ) => {

        if( !data.escritorio ) { // Validación si no se envia un escritorio
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket( data.escritorio );

        callback( atenderTicket );

        // Actualizar / Notificar cambios en los últimos 4

    });

});